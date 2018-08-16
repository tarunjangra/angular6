import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'gi-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingSerices: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if(params['id']){
          this.recipe = this.recipeService.getRecipes(this.route.snapshot.params['id'])[0]
        }
      }
    );
  }

  pushToShoppingList(){
    this.shoppingSerices.addIngredients(this.recipe.ingredients);
  }


}
