import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
  selector: 'gi-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredient: Ingredient;
  mode: string;
  paramSubscription: Subscription;
  constructor(
    private shoppingList: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['id'] && this.route.snapshot.params['mode']){
      this.ingredient = this.shoppingList.getIngredients(this.route.snapshot.params['id'])[0];
      this.mode = this.route.snapshot.params['mode'];
    }
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        if(params['id'] && params['mode']){
          this.ingredient = this.shoppingList.getIngredients(params['id'])[0];
          this.mode = params['mode'];
        }
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
