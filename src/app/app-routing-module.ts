import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {authenticationGuard} from "./guards/authentication.guard";
import {authorizationGuard} from "./guards/authorization.guard";
import {NotAuthozorizedComponent} from "./not-authozorized/not-authozorized.component";

const routes:Routes=[
  {path:"admin",  canActivate:[authenticationGuard] ,component:AdminTemplateComponent,children:[
      {path:"products", component:ProductsComponent},
      {path:"newProduct", component:NewProductComponent,canActivate:[authorizationGuard],
      data:{requiredRoles:'ADMIN'}},
      {path:"editProduct/:id",component:EditProductComponent,canActivate:[authorizationGuard],
        data:{requiredRoles:'ADMIN'}},
      {path:"notAuthorized",component:NotAuthozorizedComponent}
    ]},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},

  {path:"", redirectTo : "login" , pathMatch : "full"}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
