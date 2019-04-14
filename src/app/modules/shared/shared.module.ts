import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LoginComponent } from './components/login/login.component';
import { ZippyAccordionComponent } from './components/zippy-accordion/zippy-accordion.component';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    ZippyAccordionComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  exports: [
    ZippyAccordionComponent,
    LoginComponent
  ],
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [    
        ProductService,
        OrderService,
        AngularFireAuth
      ]
    }
  }
}
