import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{

  public formGroup!: FormGroup
constructor(private fb :FormBuilder,private productService:ProductsService) {
}

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      name:this.fb.control('',[Validators.required]),
      price:this.fb.control(0),
      checked:this.fb.control(false)
      }
    )
  }

  saveProduct() {
 let product = this.formGroup.value
    this.productService.saveProduct(product).subscribe({
      next: (data)=>{
        alert(JSON.stringify(data))
      },
      error :err => {
        console.log(err)
      }
    })

  }
}
