import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private  host: string="http://localhost:8089"
  constructor(private http: HttpClient) {
  }
// premiere methode => Normal
  // getAllProducts(page:number=0,size:number=4): Observable<Array<Product>> {
  //   return this.http.get<Array<any>>(`http://localhost:8089/products?_page=${page}&_limit=${size}`)
  // }
  //  deuxieme methode pour recuperer la header pour obtenir le totale de page
  // getAllProducts(page:number=0,size:number=4) {
  //   return this.http.get(`http://localhost:8089/products?_page=${page}&_limit=${size}`,{observe:"response"})
  // }

  searchProducts(keyword:string="",page:number=0,size:number=4) {
    return this.http.get(`${this.host}/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:"response"})
  }
  checkProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.host}/products/${product.id}`, {
      checked: !product.checked
    })
  }

  deleteProduct(product: Product){
    return this.http.delete<any>(`${this.host}/products/${product.id}`)
  }
  saveProduct(product:Product){
    return this.http.post(`${this.host}/products`,product)
  }
  // searchProducts(keyword:string): Observable<Array<Product>> {
  //   return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`)
  // }

  getProductById(productId: number):Observable<Product> {
    return this.http.get<Product>(`${this.host}/products/${productId}`)

  }

  updateProduct(product:Product):Observable<Product> {
   return   this.http.put<Product>(`${this.host}/products/${product.id}`,product)

  }
}
