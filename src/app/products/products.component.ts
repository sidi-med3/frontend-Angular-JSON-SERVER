import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../services/products.service";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {FormsModule} from "@angular/forms";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private  http:HttpClient, private productServie : ProductsService,
              private router:Router,
              public appSatate:AppStateService) {
  }
  // products$!:Observable<Array<Product>>





  ngOnInit(): void {
   this.searchProducts();
  }
  searchProducts(){
   /* this.appSatate.setProductsState({
      status:"LOADING"
    })*/
    this.productServie.searchProducts(this.appSatate.productsState.keyword,this.appSatate.productsState.currentPage,
      this.appSatate.productsState.pageSize).subscribe({
        next : (resp) =>{
         // this.appSatate.productsState.products= resp.body as Product[]
          let products =  resp.body as Product[]
          let totalProduct:number = parseInt(resp.headers.get('x-total-count')!);
         // this.appSatate.productsState.totalProducts=totalProduct
          let totalPage=
          this.appSatate.productsState.totalPages = Math.floor(totalProduct / this.appSatate.productsState.pageSize)
          if ((totalProduct % this.appSatate.productsState.pageSize)!=0){
            //this.appSatate.productsState.totalPages=this.appSatate.productsState.totalPages+1
            ++totalPage
          }
          this.appSatate.setProductsState({
            products:products,
            totalProducts:totalProduct,
            totalPages:totalPage,
            status:"LOADED"


          })
        },
      error:(err)=>{
          this.appSatate.setProductsState({
            status:"ERROR",
            errorMessage:err
          })
      }
      }
    )
    // this.products$ = this.productServie.getAllProducts();
  }
  handlCheckProduct(product : any) {
    this.productServie.checkProduct(product).
    subscribe({
      next :updated=>{
        // this.getAllProducts();
        product.checked = !product.checked
      }
    })


  }

  handleleteProduct(product: Product) {
    if(confirm("etes vous sur ?"))
    this.productServie.deleteProduct(product).subscribe({
      next: ()=>{
        this.searchProducts()
      //  this.appSatate.productsState.products= this.appSatate.productsState.products.filter((p:any)=>p.id!=product.id)
        // this.getAllProducts();
      }
    })

  }
  //
  // searchProducts(keyword: string) {
  //   this.productServie.searchProducts(keyword).subscribe({
  //     next : (data)=>{
  //       this.products=data;
  //     }
  //   })
  //
  // }

  handleGetTo(page: number) {
    this.appSatate.productsState.currentPage = page
    this.searchProducts()

  }

  handlEditProduct(product: Product) {
    this.router.navigateByUrl(`/admin/editProduct/${product.id}`)
  }
}
