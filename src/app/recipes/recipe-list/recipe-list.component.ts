import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'gi-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onRecipeSelecte(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
