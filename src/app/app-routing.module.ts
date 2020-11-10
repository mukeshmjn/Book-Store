import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path : 'aboutus', component: AboutComponent},
  { path : 'login', component: LoginComponent},
  { path: 'orderconfirmed', component: ConfirmedComponent},
  {path: 'productdetails', component: ProductdetailsComponent},
  { path: 'orderdetails', component: OrderdetailsComponent},
  { path: 'contactus', component: ContactComponent},
  { path: 'orders', component: OrdersComponent},
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  
 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
