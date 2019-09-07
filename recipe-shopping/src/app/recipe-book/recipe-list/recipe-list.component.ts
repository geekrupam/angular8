import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [ new Recipe('A test recipe', ' test description', 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/Birthday-Cake-6in-Direct-1_8c5c2784-ac0c-450c-9d0e-98b1334b2676_800x.jpg?v=1554438198')];
  constructor() { }

  ngOnInit() {
  }

}
