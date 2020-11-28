import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Home } from 'src/app/home.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {




   constructor(private firestore: AngularFirestore) { }


  getBooks() {
    return this.firestore.collection('cart').snapshotChanges();
}

deleteBook(homeId: string){
  this.firestore.doc('cart/' + homeId).delete();
  debugger
}

}



