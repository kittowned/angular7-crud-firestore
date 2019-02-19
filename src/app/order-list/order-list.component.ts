import { OrderService } from './../services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../models/order';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit,OnDestroy {

  orders: Order[] = [];

  orderToggle: Order;

  subscription: Subscription;

  constructor( private orderService : OrderService) { }

  ngOnInit() {
    this.subscription = this.orderService.getAll().subscribe(data => {
      this.orders = data.map( e => {
          let full = e.payload.doc.data();
          full.id = e.payload.doc.id;
          e.payload.doc.data().customerRef.get().then(res => {
            full.customer = res.data();
          })
          return full;
      })
      this.orderToggle = Object.create(this.orders[0]);
    })
  }

  showHide(oId){
    if(this.orderToggle.id === oId) {
      this.orderToggle.bool = !this.orderToggle.bool;
    } else {
      let order = this.orders.filter(p => oId === p.id);
      this.orderToggle = Object.create(order[0]);
      this.orderToggle.bool = !this.orderToggle.bool;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

