import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@Angular/forms";
import { AngularFirestore, docChanges } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { Subject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Home } from 'src/app/home.model';
import { HomeService } from '../services/home.service';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductdetailService } from '../services/productdetail.service';
import { AuthService } from '../services/auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myArray: any[] = []
  books: Home[];
  fid:any
  email: any;
  searchText:string;
  pno:any;
  firstName: any;
  lastName: any;
  inputCountryCode: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  
  subject = new Subject()


 
  constructor(public authService: AuthService,private firestore: AngularFirestore,
    private afStorage: AngularFireStorage,
    private cart: CartService,
    private _snackBar: MatSnackBar,
    private homeService: HomeService,
    private pdetails: ProductdetailService) { }
    

  ngOnInit() {
 this.getBooks();
 
 this.email = localStorage.getItem('email');
 this.firstName = localStorage.getItem('firstName');
 this.lastName = localStorage.getItem('lastName' );
 this.pno = localStorage.getItem('pno');
    
    

  }



  

  getBooks(){
 
  this.homeService.getBooks().subscribe(data => {
    this.books = data.map(e => {
      
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as Home
       } ;
    })
  });
  console.log('abcd')
    }

    addtocart(abc){
      
      this.authService.user.subscribe(data=>{
        console.log('add:',data)
        if((data)){
          
         console.log(abc)
         
     this.fid= localStorage.getItem('fid')
     this.firestore.collection(`users/${this.fid}/cart`).add({
      bookname: abc.bookname,
      author: abc.author,
      price: abc.price,
      image:abc.image,
      pages:abc.pages
   
   })
   .then(res => {
       console.log(res);
    this.openSnackBar1()
    
   })
   .catch(e => {
       console.log(e);
   })
   
        }
        else{
          debugger
         this.openSnackBar2();
        }
      })

     
    }
    productDetails(abc)
    {
      console.log(abc);
      this.pdetails.productDetails({type:'SEND-ORDER_DETAILS',value:abc})
    
    }


  
    openSnackBar1() {
      console.log('snackbar hai g')
    
      this._snackBar.open('Product has been added to Cart', 'Thanks', {
        duration: 500,
       
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  
    openSnackBar2() {
      console.log('snackbar hai g')
    
      this._snackBar.open('Please login/register first!!', 'Thanks', {
        duration: 500,
       
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }

}
