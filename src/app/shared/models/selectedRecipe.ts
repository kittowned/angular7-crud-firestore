import { Recipe } from './recipe';

export interface SelectedRecipe extends Recipe {
    quantity: string | number;
}