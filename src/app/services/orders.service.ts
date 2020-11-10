import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Orders } from 'src/app/orders.model'
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore) { }

  getOrders() {
    return this.firestore.collection('orders').snapshotChanges();
}

}
