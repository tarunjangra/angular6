import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'gi-recipe-wrapper',
  templateUrl: './recipe-wrapper.component.html',
  styleUrls: ['./recipe-wrapper.component.css']
})
export class RecipeWrapperComponent implements OnInit {

  selectedRecipe: Recipe;
  paramSubscription: Subscription;
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      this.selectedRecipe = this.recipeService.getRecipes(this.route.snapshot.params['id'])[0];
    }
    
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        if(params['id']){
          this.selectedRecipe = this.recipeService.getRecipes(params['id'])[0];
        }
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramSubscription.unsubscribe();
  }

}
