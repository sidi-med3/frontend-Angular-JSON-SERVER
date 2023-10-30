import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {LoadingService} from "../services/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'enset-app';
  public iSLoading! :Boolean;
  constructor(public appState:AppStateService,
              public loadingService:LoadingService,
              private router:Router) {
    this.loadingService.isLoading$.subscribe({
      next : (value)=>{
        this.iSLoading=value;
      }
    })
  }
  currentAction:any
  actions:Array<any>=[
    {title:'HOME',"route":'/home',icon:"bi-house"},
    {title: 'Products',"route":'/admin/products',icon: "bi-arrow-down-up"},
    {title: 'New Product',"route":'/admin/newProduct',icon: "bi-plus-circle"}]

  setCurrentAction(action: any) {
    this.currentAction=action

  }

  logout() {
    this.appState.authState = {}
    this.router.navigateByUrl("/login")
  }

  login() {
    this.router.navigateByUrl("/login")
  }
}
