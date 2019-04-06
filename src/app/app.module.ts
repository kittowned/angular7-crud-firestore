import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BsDatepickerModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HoursComponent } from './components/hours/hours.component';
import { ModalComponent } from './components/modal/modal.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule.forRoot(),
  ],
  providers: [
    AngularFirestore,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [OrderFormComponent]
})
export class AppModule { }
