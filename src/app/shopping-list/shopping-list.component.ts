import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'gi-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]= [];
  loginState: boolean = false;
  private subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginState = this.auth.loggedIn;
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.newIngredient
     .subscribe(
       (ingredients: Ingredient[]) => {
         this.ingredients = ingredients;
       }
      );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
