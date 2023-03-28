import { Component, Input, OnChanges } from '@angular/core';
import { Character } from '../../models/character.model'

@Component({
  selector: 'app-list-favorites',
  templateUrl: './list-favorites.component.html',
  styleUrls: ['./list-favorites.component.sass']
})
export class ListFavoritesComponent implements OnChanges{

  favorites: Character[] = [];

  // el constructor corre antes del render
  constructor() {}

  ngOnChanges() {
    this.getLocalStorage()
    console.log('cambio');

  }

  getLocalStorage() {

    let favorites: Character[] = JSON.parse(localStorage.getItem('favorites') || '');
    this.favorites = favorites
    console.log();

  }

}
