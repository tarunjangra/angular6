import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Params } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'gi-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
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
