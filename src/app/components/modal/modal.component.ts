import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  bsModalRef: BsModalRef;
  constructor( private modalService: BsModalService ) { }

  openModalWithComponent() {
    const initialState = {
      list: [ 'Hello modal' ],
      title : [ 'Welcome' ]
    };
    this.bsModalRef = this.modalService.show(OrderFormComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'anos';
  }
}
