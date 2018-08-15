import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'gi-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [];

  shoppingList: boolean = false;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.newIngredient
     .subscribe(
       (ingredients: Ingredient[]) => {
         this.ingredients = ingredients;
       }
      );
  }

  showNavigation(navigation: string){
    if(navigation === 'shopping_list'){
      this.shoppingList = true;
    }else{
      this.shoppingList = false;
    }
  }
}
