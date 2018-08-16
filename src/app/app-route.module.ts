import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../node_modules/@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeNewComponent } from "./recipes/recipe-new/recipe-new.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGarud } from './services/auth-garud.service';

const appRoutes: Routes = [
    {path: '', component: RecipesComponent},
    {path: 'recipe', component: RecipesComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'shopping-list/:id', component: ShoppingListComponent},
    {path: 'recipe/new', canActivate:[AuthGarud], component: RecipeNewComponent},
    {path: 'recipe/:id', component: RecipesComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule {

}