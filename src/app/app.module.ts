import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/*


+-

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';

/* Components */
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent}   from './pagenotfound/pagenotfound.component';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    AboutComponent,
    ConfirmedComponent,
    LoginComponent,
    OrdersComponent,
    OrderdetailsComponent,
    ProductdetailsComponent,
    RegisterComponent,
    PagenotfoundComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'bookstore'),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  //  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),


  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
