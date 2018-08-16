import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  newIngredient = new Subject<Ingredient[]>();
  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tommatos', 10),
    new Ingredient('Cucumber', 5),
  ];
  constructor() { }

  getIngredients(indx: number = null): Ingredient[] {
    if (indx === null){
      return this.ingredients.slice();
    }
    return [this.ingredients[indx]];
  }

  /**
   * This function can be used to add Ingredient
   * @param ingObj Ingredient object
   * @returns Number of available elements in an array
   */
  addIngredient(ingObj: Ingredient){
    this.ingredients.push(ingObj);
    this.newIngredient.next(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]){
    this.ingredients.push(...ings);
    this.newIngredient.next(this.ingredients.slice());
  }

  deleteIngredient(indx: number): Ingredient[]{
    return this.ingredients.splice(indx, 1);
  }
}
