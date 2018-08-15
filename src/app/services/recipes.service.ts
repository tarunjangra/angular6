import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Burger King',
      'Amazing burger with an amazing taste.',
      'http://www.burgerking.com.my/upload/image/Category/2/double-bbq-beefacon-thumb.jpg',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Meltable Cheese', 3),
        new Ingredient('Cucumber', 2),
      ]
    ),
    new Recipe(
      'Chees Pizza',
      'Pizza with great taste',
      'https://www.publicdomainpictures.net/pictures/40000/velka/pizza-in-mauritius.jpg',
      [
        new Ingredient('Bred', 1),
        new Ingredient('Margireta Cheese', 1),
        new Ingredient('Capcicum', 2)
      ]
    ),
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
