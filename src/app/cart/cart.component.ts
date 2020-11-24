import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'
import { Subject } from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import {SendorderService} from '../services/sendorder.service'
import { Home } from 'src/app/home.model';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  myArray: any[] = []
  myArray1: any[] = []
  id: any
  constructor(private firestore: AngularFirestore,
    private afStorage: AngularFireStorage,private cart: CartService,
    private homeService: HomeService,
    private sendorder:SendorderService) { }
    book1: any
    subject= new Subject()
    value: any;
    abc:any;
    books: Home[];
    totalPrice:any
  
  ngOnInit() {
    // this.cart.getMsg().subscribe(myArray => {
    //   debugger
    //   console.log(myArray)
    // })
    // this.firestore
    // .collection("cart")
    // .get()
    // .subscribe((ss) => {
    //   ss.docs.forEach((doc) => {
      
    //    this.myArray.push(doc.data());
    //     this.myArray.map(doc.data);
    //         console.log(doc.data())                       
    //    debugger
    //    // this.myArray.push(doc.id)
  
    //   });
    // })
    this.getBooks();
  }
  sendOrderData()
  {
    this.sendorder.sendDetails({type:'SEND-ORDER_DETAILS',value:this.books,total:this.totalPrice})
  }
  delete(value) {
    debugger
    console.log(value)
    debugger
    // if (confirm('Delete?')) {
    //     this.firestore.collection('cart').doc(value).delete().then(()=>{

    //     });
    //   console.log('successfully deleted')
    // }
    this.cart.deleteBook(value);
}


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
  this.cart.getBooks().subscribe(data => {
    this.books = data.map(e => {
      debugger
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as Home
       } ;
    })
    console.log(this.books.length)
    console.log(this.books)
  

let  bookPrices: number[] = []

if(this.books.length>0){
for (let book of this.books ) {
bookPrices.push(book.price)

 this.totalPrice = bookPrices.reduce((total, price) => total + price, 0)
 this.totalPrice.toFixed(2)
}

}
else{
  this.totalPrice=0
}
console.log(bookPrices)
console.log(this.totalPrice)

  });
  console.log('abcd')
  
    }

}
