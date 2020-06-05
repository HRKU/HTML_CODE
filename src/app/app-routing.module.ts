import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'', redirectTo:'/main', pathMatch: 'full' },
  {path:'main',component: HomeComponent},
  {path:'product-detail',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationsComponent},
  {path:'mycart',component:MyCartComponent},
  {path: 'my-orders', component:MyOrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
