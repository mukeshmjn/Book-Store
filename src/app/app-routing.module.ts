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
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/Auth-Guard/auth-guard.service';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
  { path: 'checkout', component: CheckoutComponent,canActivate:[AuthGuard] },
  { path : 'aboutus', component: AboutComponent},
  { path : 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'orderconfirmed', component: ConfirmedComponent,canActivate:[AuthGuard]},
  {path: 'productdetails', component: ProductdetailsComponent},
  { path: 'orderdetails', component: OrderdetailsComponent,canActivate:[AuthGuard]},
  { path: 'contactus', component: ContactComponent},
  { path: 'orders', component: OrdersComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  {
    path: "**",
    component: PagenotfoundComponent,
  },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
