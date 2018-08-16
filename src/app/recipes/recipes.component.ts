import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.service';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'gi-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      this.selectedRecipe = this.recipeService.getRecipes(this.route.snapshot.params['id'])[0];
    }
    
    this.route.params.subscribe(
      (params: Params) => {
        if(params['id']){
          this.selectedRecipe = this.recipeService.getRecipes(params['id'])[0];
        }
      }
    );
     
    
  }

}
