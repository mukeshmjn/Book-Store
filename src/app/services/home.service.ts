import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Home } from 'src/app/home.model';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private firestore: AngularFirestore) { }

  getBooks() {
    return this.firestore.collection('home').snapshotChanges();
}

createBook(home: Home){
  return this.firestore.collection('cart').add(home);
}

deleteBook(homeId: string){
  this.firestore.doc('home/' + homeId).delete();
}

getProduct(id: string){
  
  return this.firestore.collection('home').doc(id).get()
}



}
