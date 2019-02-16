import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersCollection : AngularFirestoreCollection<Order>;
  orders: Observable<DocumentChangeAction<Order>[]>;
  vm;

  constructor( private db: AngularFirestore) {
    this.ordersCollection = db.collection<Order>('orders'); // not sure if works without this
    this.orders = this.ordersCollection.snapshotChanges();
   }

   
   getAll() {
     return this.orders;
   }

}
