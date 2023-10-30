import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }
  productsState:any={
   keyword : "",
  totalPages :0,
  pageSize :3,
  currentPage:1,
  products: [],
    totalProducts:0,
    status:"",
    errorMessage:""
}
public authState:any = {
    isAuthenticated : false,
     username : undefined,
    roles : undefined,
     token :undefined
}
public setAuthState(state:any){
    this.authState ={ ...this.authState,...state}
  }

setProductsState(state : any){
    this.productsState= {...this.productsState,...state}}
}

