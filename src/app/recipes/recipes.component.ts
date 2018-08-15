import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'gi-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: boolean = true;
  selectedRecipe: Recipe;
  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.recipeService.selectedRecipe
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  showNavigation(navigation: string){
    if(navigation === 'recipe'){
      this.recipe = true;
    }else{
      this.recipe = false;
    }
  }

}
