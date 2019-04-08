import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HoursComponent } from './components/hours/hours.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children : [
    { path: '', component: OrderListComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'hours', component: HoursComponent },
  ] },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
