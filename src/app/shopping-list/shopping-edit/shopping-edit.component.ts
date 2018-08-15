import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';


@Component({
  selector: 'gi-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(
    private shoppingList: ShoppingListService 
  ) { }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement,amount: HTMLInputElement){
    this.shoppingList.addIngredient(new Ingredient(name.value,Number(amount.value))); 
    this.shoppingList.selectedIngredient.emit();
  }

}
