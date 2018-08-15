import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tarun recipe','A test for tarun','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('deepak Recipe','A test for deepak','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
  ];
  constructor() {}

  getRecipes(indx: number = null): Recipe[]{
    if (indx === null){
      return this.recipes.slice()
    }
    return [this.recipes[indx]];
  }
  /**
   * This function can be used to add Recipes
   * @param recipeObj Recipe object
   * @returns Number of available elements in an array
   */
  addRecipe(recipeObj: Recipe): number{
    return this.recipes.push(recipeObj);
  }

  deleteRecipe(indx: number): Recipe[]{
    return this.recipes.splice(indx, 1);
  }
}
