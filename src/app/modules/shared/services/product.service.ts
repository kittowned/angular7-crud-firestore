
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<DocumentChangeAction<Product>[]>

  constructor(private db: AngularFirestore){
      this.productsCollection = db.collection<Product>('products'); // Create reference to collection
      this.products = this.productsCollection.snapshotChanges(); // Get DocumentChangeAction observable.
  }

  getAll(){
    return this.products;
  }

  async addProduct(product: Product) {
      await this.productsCollection.add(product);
  }

  async getProduct(productId) {
    try {
    const docRef = await this.productsCollection.doc(productId).get();
    // console.log(docRef)
    docRef.subscribe(doc => {
      if(doc.exists){
        return doc.data();
      }
    });
    } catch(e) {
      console.error(e);
    }

  }

  async deleteProduct(productId) {
    try {
      await this.productsCollection.doc(productId).delete();
      console.log('Document successfully deleted!');
    } catch (e) {
      console.error('Error removing document: ', e);
    }
  }

  updateProduct() {

  }

}