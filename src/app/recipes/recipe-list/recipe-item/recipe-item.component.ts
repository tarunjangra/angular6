import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'gi-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}
