import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

import { ZippyAccordionComponent } from './components/zippy-accordion/zippy-accordion.component';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ZippyAccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ZippyAccordionComponent
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [    
        ProductService,
        OrderService 
      ]
    }
  }
}
