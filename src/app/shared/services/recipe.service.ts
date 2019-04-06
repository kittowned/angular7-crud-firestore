import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { AngularFirestoreCollection, DocumentChangeAction, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<DocumentChangeAction<Recipe>[]>;

  constructor(private db: AngularFirestore) {
    this.recipesCollection = db.collection<Recipe>('recipes'); // Create reference to collection
    this.recipes = this.recipesCollection.snapshotChanges(); // Get DocumentChangeAction observable.
   }

   getAll(){
    return this.recipes;
  }
}
