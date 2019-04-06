import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HoursComponent } from './components/hours/hours.component';
import { ModalComponent } from './components/modal/modal.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    OrderListComponent,
    CustomerListComponent,
    RecipeListComponent,
    SidebarComponent,
    HoursComponent,
    OrderFormComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerfectScrollbarModule,
    DashboardRoutingModule,
    FormsModule,
    BsDropdownModule,
    ModalModule,
    BsDatepickerModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class DashboardModule { }
