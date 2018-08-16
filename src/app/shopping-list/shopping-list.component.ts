import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'gi-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [];
  loginState: boolean = false;

  constructor(
    private shoppingListService: ShoppingListService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginState = this.auth.loggedIn;
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.newIngredient
     .subscribe(
       (ingredients: Ingredient[]) => {
         this.ingredients = ingredients;
       }
      );
  }

}
