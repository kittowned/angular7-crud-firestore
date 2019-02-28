import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

import { SelectedRecipe } from './../../models/selectedRecipe';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit, OnDestroy {
  closeBtnName: string;
  datepickerModel: Date;
  bsValue = new Date();
  recipes: Recipe[] = [];
  selectedRecipes: SelectedRecipe[] = [];
  current: Recipe;
  currentQuantity: string | number = '' ;
  orderModel = {};
  subscription: Subscription;
  constructor( public bsModalRef: BsModalRef,
              private recipeService: RecipeService ) {}
 
  ngOnInit() {
    this.subscription = this.recipeService.getAll().subscribe(data => {
      this.recipes = data.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })
  }

  onFormSubmit(orderForm: NgForm){
	console.log(orderForm);
  }

  resetOrderForm(orderForm: NgForm) {
    orderForm.resetForm();
  } 

 ngOnDestroy(){
   this.subscription.unsubscribe();
  }

 addDessert(){
	if(!this.currentQuantity) return; 
	if(this.selectedRecipes.length) {
		for(const recipe of this.selectedRecipes){
			if(this.current.name === recipe.name) return;
		}
	}
	if(typeof this.current == 'string' || typeof this.current == 'undefined') return;
	

	const recipe = { ...this.current, quantity: this.currentQuantity }
	this.selectedRecipes.push(recipe);
 }

 deleteDessert(recipeName){
	if(!recipeName) return;
	
	for(let i = this.selectedRecipes.length -1; i >= 0; i--) {
		if(this.selectedRecipes[i].name === recipeName) {
			this.selectedRecipes.splice(i, 1);
			console.log(`${recipeName} was removed.`)
		}
	}
 }
 
 get totalPrice(){
	let total = 0;
	for(const recipe of this.selectedRecipes as any){
		let recipeCost = recipe.cost * recipe.quantity;
		total += recipeCost;
	}
	return total;
 }
 
}
