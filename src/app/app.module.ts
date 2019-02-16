import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { OrderService } from './services/order.service';
import { ZippyAccordionComponent } from './shared/zippy-accordion/zippy-accordion.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderListComponent,
    CustomerListComponent,
    RecipeListComponent,
    ZippyAccordionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    ProductService,
    OrderService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
