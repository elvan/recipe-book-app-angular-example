import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  ngOnInit(): void {}

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
