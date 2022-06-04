import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeBookService {
  private recipes: Recipe[] = [
    new Recipe({
      name: 'Schnitzel',
      description: 'Very tasty',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    }),
    new Recipe({
      name: 'Big Fat Burger',
      description: 'What else you need to say?',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    }),
    new Recipe({
      name: 'Spaghetti',
      description: 'The best spagetti ever',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    }),
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
