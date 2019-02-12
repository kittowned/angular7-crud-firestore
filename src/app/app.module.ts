import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    ProductService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
