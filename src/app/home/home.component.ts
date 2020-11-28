import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@Angular/forms";
import { AngularFirestore, docChanges } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { Subject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Home } from 'src/app/home.model';
import { HomeService } from '../services/home.service';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductdetailService } from '../services/productdetail.service'
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
  email: any;
  firstName: any;
  lastName: any;
  inputCountryCode: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // book1: any;
  subject = new Subject()


 
  constructor(private firestore: AngularFirestore,
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
 this.inputCountryCode = localStorage.getItem('inputCountryCode');
    // debugger
    // this.cart.getMsg().subscribe(myArray =>{ 
    //   debugger
    //   this.myArray.forEach((abc) => {
    //     debugger
    //     console.log(abc.price)
    //     this.firestore.collection('cart').add({
    //      book1: abc.book1,
    //      image: abc.image,
    //      price: abc.price,
     
    //   })
    //   .then(res => {
    //       console.log(res);
    //       console.log(this.myArray.length)
    //     debugger
    //   })
    //   .catch(e => {
    //       console.log(e);
    //   })
    //   })
      
      
    // })
  
    
    

  }

  // sendMsg(myArray){
  //   debugger
  //   this.subject.next(myArray) //triger the event
  //   console.log(myArray)
  // }

  // getmsg(){
  //   return this.subject.asObservable()
  // }

  

  getBooks(){
  //   this.firestore
  // .collection("home1")
  // .get()
  // .subscribe((ss) => {
  //   ss.docs.forEach((doc) => {
  //     debugger
  //     this.myArray.push(doc.data());
  //     // debugger;
  //     debugger
  //    console.log(doc);
  //     // this.addtocart(doc.data());
  //     // this.sendMsg(doc)
  //   });
    
  // })
  this.homeService.getBooks().subscribe(data => {
    this.books = data.map(e => {
      debugger
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as Home
       } ;
    })
  });
  console.log('abcd')
    }

    addtocart(abc){
      debugger
      console.log(abc)
      
//  this.cart.sendMsg(this.myArray)
// abc.forEach((def) => {
//   debugger
//   console.log(abc.price)
  this.firestore.collection('cart').add({
   bookname: abc.bookname,
   author: abc.author,
   price: abc.price,
   image:abc.image,
   pages:abc.pages

})
.then(res => {
    console.log(res);
 
  debugger
})
.catch(e => {
    console.log(e);
})


     
    }
    productDetails(abc)
    {
      console.log(abc);
      this.pdetails.productDetails({type:'SEND-ORDER_DETAILS',value:abc})
      debugger
    }


  
    openSnackBar() {
      console.log('snackbar hai g')
      debugger
      this._snackBar.open('Product has been added to Cart', 'Thanks', {
        duration: 500,
       
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  

}
