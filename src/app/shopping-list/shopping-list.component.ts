import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'gi-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tommatos', 10),
  ];

  shoppingList: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  showNavigation(navigation: string){
    console.log(navigation);
    if(navigation === 'shopping_list'){
      this.shoppingList = true;
    }else{
      this.shoppingList = false;
    }
  }

}
