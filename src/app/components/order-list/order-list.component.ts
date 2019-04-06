import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrderFormComponent } from '../order-form/order-form.component';
import { Order } from '../../shared/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit,OnDestroy {
  bsModalRef: BsModalRef;

  orders: Order[] = [];

  orderToggle: Order;

  subscription: Subscription;

  tableTitles = [];

  sortedArray = [];

  constructor( private orderService : OrderService,
    private modalService: BsModalService ) { }

  ngOnInit() {
    this.tableTitles = this.orderService.getTableTitles();
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

  openModalWithComponent() {
    const initialState = {
      title : 'New Order'
    };
    this.bsModalRef = this.modalService.show(OrderFormComponent, { backdrop: false, class: 'modal-dialog-centered', initialState });
    this.bsModalRef.content.somethingNew = ''; // This is how to insert content into template strings
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

  sort(title){
    // title will be one of four choices: customer, order, pick up on and price
    // use array.prototype.sort() to order the orders and array.prototype.reverse() to reverse ascending/descending order based on a boolean value.
    // convert template strings date https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript
    console.log(title)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

