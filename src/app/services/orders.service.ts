import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Orders } from 'src/app/orders.model'
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
fid:any
  constructor(private firestore: AngularFirestore) { }

  getOrders() {
    this.fid= localStorage.getItem('fid')
    return this.firestore.collection(`users/${this.fid}/orders`).snapshotChanges();
}

}
