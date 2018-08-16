import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';


@Component({
  selector: 'gi-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredient: Ingredient = {name: null, amount: null};
  mode: string;
  paramSubscription: Subscription;
  changesSaved: boolean = false;
  constructor(
    private shoppingList: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
  }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      this.ingredient = this.shoppingList.getIngredients(this.route.snapshot.params['id'])[0];
    }
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        if(params['id']){
          this.ingredient = this.shoppingList.getIngredients(params['id'])[0];
        }
      }
    );

    console.log(this.route.snapshot.queryParams['mode']);;
    this.route.queryParams.subscribe(
      (params: Params) => {
        console.log(params['mode'])
      }
    );

  }

  addIngredient(name: HTMLInputElement,amount: HTMLInputElement){
    this.shoppingList.addIngredient(new Ingredient(name.value,Number(amount.value))); 
  }

  navitateToShoppingListOnClear(){
    this.router.navigate(['/shopping-list']);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramSubscription.unsubscribe();
  }

}
