import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe('Tarun recipe','A test for tarun','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('deepak Recipe','A test for deepak','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
  ];
  constructor() { }
}
