import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'gi-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredients: Ingredient[]=[];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement,amount: HTMLInputElement){
    this.ingredients.push(new Ingredient(name.value, Number(amount.value)));
    console.log(this.ingredients);
  }

}
