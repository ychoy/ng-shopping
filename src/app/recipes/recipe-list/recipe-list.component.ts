import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tiramisu', 'Delectable. Use only the best ingredients!', 'https://i.imgur.com/3IHUG9t.jpg'),
    new Recipe('Tiramisu', 'Delectable. Use only the best ingredients!', 'https://i.imgur.com/3IHUG9t.jpg'),
    new Recipe('Tiramisu', 'Delectable. Use only the best ingredients!', 'https://i.imgur.com/3IHUG9t.jpg')
  

  ];

  constructor() { }

  ngOnInit() {
  }

}
