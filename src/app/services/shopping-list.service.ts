import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tommatos', 10),
  ];
  constructor() { }
}
