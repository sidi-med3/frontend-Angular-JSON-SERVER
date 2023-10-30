import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
public  isLoading$ = new Subject<Boolean>()
  constructor() { }
  showLoadingSniper():void{
  this.isLoading$.next(true)
  }
  headLoadingSniper():void{
  this.isLoading$.next(false)
  }
}
