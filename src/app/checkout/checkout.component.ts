import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from '../home/home.component'
import { CartService } from '../services/cart.service';
import {SendorderService} from '../services/sendorder.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore, docChanges } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  orders: any;
  ordersplaced:any
  
  constructor(
    private cart: CartService,
    private sendorder:SendorderService,
    private firestore: AngularFirestore,
    private afStorage: AngularFireStorage, ) { }
  // declarations: [HomeComponent]
  form = new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    lname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    sadd: new FormControl('',Validators.required),
    mark: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),

    state: new FormControl('',Validators.required),
    zip: new FormControl('',[Validators.required,Validators.minLength(6)])
    // lname: new FormControl(''),
    // lname: new FormControl(''),

  });
  ngOnInit() {
  this.sendorder.message.subscribe(mesg =>{
    debugger
    console.log(mesg);
    this.orders = mesg.value;
    console.log(this.orders)
  })

 

  

}
onSubmit(){
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
  debugger
  this.ordersplaced=this.form.value
  debugger
  this.orders.forEach((abc)=>{
    console.log(this.orders)
    debugger
    this.firestore.collection('orders').add({
      bookname: abc.bookname,
      author:abc.author,
      pages:abc.pages,
      image: abc.image,
      price: abc.price,
      firstName: this.ordersplaced.fname,
      lastName: this.ordersplaced.lname,
      streetAddress: this.ordersplaced.sadd,
      mark: this.ordersplaced.mark,
      city: this.ordersplaced.city,
      state: this.ordersplaced.state,
      zip: this.ordersplaced.zip
   })
   .then(res => {
       console.log(res);
     
     debugger
   })
   .catch(e => {
       console.log(e);
   })
   console.log(abc.id)
   this.cart.deleteBook(abc.id)
   debugger;
   console.log(abc.id)
  })
  console.log(this.ordersplaced)
;
 debugger
  
    
}
}
