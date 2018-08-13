import { Component, OnInit } from '@angular/core';

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
