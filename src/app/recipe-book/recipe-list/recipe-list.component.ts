import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipes = this.recipeBookService.getRecipes();
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
