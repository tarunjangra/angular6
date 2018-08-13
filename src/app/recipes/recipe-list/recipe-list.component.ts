import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'gi-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('Tarun recipe','A test for tarun','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('deepak Recipe','A test for deepak','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('A test recipe','A test','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('A test recipe','A test','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('A test recipe','A test','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('A test recipe','A test','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('A test recipe','A test','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelecte(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
