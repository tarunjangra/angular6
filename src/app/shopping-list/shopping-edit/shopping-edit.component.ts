import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'gi-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddIngredient: EventEmitter<Ingredient> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement,amount: HTMLInputElement){
    this.onAddIngredient.emit(new Ingredient(name.value,Number(amount.value)));
  }

}
