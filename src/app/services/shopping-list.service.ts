import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  newIngredient = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tommatos', 10),
    new Ingredient('Cucumber', 5),
  ];
  constructor() { }

  getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }
  /**
   * This function can be used to add Ingredient
   * @param ingObj Ingredient object
   * @returns Number of available elements in an array
   */
  addIngredient(ingObj: Ingredient){
    this.ingredients.push(ingObj);
    this.newIngredient.emit(this.ingredients.slice());
  }

  deleteIngredient(indx: number): Ingredient[]{
    return this.ingredients.splice(indx, 1);
  }
}
