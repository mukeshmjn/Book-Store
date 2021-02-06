import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Home } from 'src/app/home.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
fid:any



   constructor(private firestore: AngularFirestore) { }


  getBooks() {
    this.fid= localStorage.getItem('fid')
    return this.firestore.collection(`users/${this.fid}/cart`).snapshotChanges();
}

deleteBook(homeId: string){
  this.firestore.collection(`users/${this.fid}/cart`).doc(homeId).delete();
  debugger
}

}



