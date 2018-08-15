import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  selectedIngredient = new EventEmitter<void>();
  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tommatos', 10),
    new Ingredient('Cucumber', 5),
  ];
  constructor() { }

  getIngredients(): Ingredient[]{
    return this.ingredients;
  }
  /**
   * This function can be used to add Ingredient
   * @param ingObj Ingredient object
   * @returns Number of available elements in an array
   */
  addIngredient(ingObj: Ingredient): number{
    return this.ingredients.push(ingObj);
  }

  deleteIngredient(indx: number): Ingredient[]{
    return this.ingredients.splice(indx, 1);
  }
}
