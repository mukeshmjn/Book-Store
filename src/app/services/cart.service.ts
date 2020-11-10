import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore';
import { Home } from 'src/app/home.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {


  // subject = new Subject()

   constructor(private firestore: AngularFirestore) { }

  // sendMsg(myArray){
  //   debugger
  //   this.subject.next(myArray) //triger the event
   
  // }
  
  // getMsg(){
  //     debugger
  //      return this.subject.asObservable()
  // }
  getBooks() {
    return this.firestore.collection('cart').snapshotChanges();
}

deleteBook(homeId: string){
  this.firestore.doc('cart/' + homeId).delete();
  debugger
}

}



