import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  productToggle : Product;

  subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  this.subscription = this.productService.getAll().subscribe(data => {
      this.products = data.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
      this.productToggle = Object.create(this.products[0]);
    })
  }

  showHide(pId){
    if(this.productToggle.id === pId) {
      this.productToggle.bool = !this.productToggle.bool;
    } else {
      let product = this.products.filter(p => pId === p.id);
      this.productToggle = Object.create(product[0]);
      this.productToggle.bool = !this.productToggle.bool;
    }
  }

  getProduct(productId) {
    return this.productService.getProduct(productId);
  }

  addProduct(){

  }

  updateProduct(){
    console.log('taking you to product update page');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
