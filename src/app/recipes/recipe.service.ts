import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'This is a burger',
      'http://jugaad.org.in/wp-content/uploads/2017/12/i-1-sonic-burger.jpg',
      [
        new Ingredient('Meat', 1),
          new Ingredient('A', 30)
        ]),
    new Recipe(
      'Hot dog',
      'This is a hot dog',
      'http://8exll2rwl8l1f2ayejq2l9yh.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/all-beef-dog-and-regular-dog.png',
      [
        new Ingredient('Bread', 2),
          new Ingredient('A', 2)
        ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes. slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
