import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'gi-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: boolean = true;
  constructor() { }

  ngOnInit() {
  }


  showNavigation(navigation: string){
    if(navigation === 'recipe'){
      this.recipe = true;
    }else{
      this.recipe = false;
    }
  }

}
