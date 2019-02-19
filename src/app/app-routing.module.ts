import { HoursComponent } from './hours/hours.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'hours', component: HoursComponent },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
