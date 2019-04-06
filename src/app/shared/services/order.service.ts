import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order } from '../shared/models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  tableTitles = [
    {
      name: 'Customer'
    },
    {
      name: 'Order #'
    },
    {
      name: 'Pick up on'
    },
    {
      name: 'Price'
    },
  ]
  private ordersCollection : AngularFirestoreCollection<Order>;
  orders: Observable<DocumentChangeAction<Order>[]>;

  constructor( private db: AngularFirestore) {
    this.ordersCollection = db.collection<Order>('orders'); // not sure if works without this
    this.orders = this.ordersCollection.snapshotChanges();
   }

   
   getAll() {
     return this.orders;
   }

   getTableTitles() {
     return this.tableTitles;
   }

}
