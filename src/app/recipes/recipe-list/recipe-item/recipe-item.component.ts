import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'gi-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;
  @Input() id: number;
  constructor(
    private recipeService: RecipesService
  ) { }
}
