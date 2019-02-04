import { Ingredient } from './ingredient';
export interface Recipe {
    name: string;
    ingredients: Ingredient[];
    totalPrice: number;
}


let brownieRecipe = {
    name : 'Chocolate Brownie',

    ingredients : [
        {
            name: 'flour',
            price: 0.55,
            amount: 5
        },
        {
            name: 'milk',
            price: 0.37,
            amount: 2
        },
        {
            name: 'chocolate',
            price: 5.7,
            amount: 1
        }
    ],

    totalPrice : (() : number => {
        let sum : number;
        for(let ingredient of brownieRecipe.ingredients){
            sum += ingredient.price;
        }
        return sum;
    })
}