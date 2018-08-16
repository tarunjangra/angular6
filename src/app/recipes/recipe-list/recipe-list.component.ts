import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gi-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipesService,
    private route: Router
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  navigateToNewRecipe(){
    this.route.navigate(['/recipes','new']);
  }

}
