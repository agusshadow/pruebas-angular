import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model'

@Component({
  selector: 'app-list-favorites',
  templateUrl: './list-favorites.component.html',
  styleUrls: ['./list-favorites.component.sass']
})
export class ListFavoritesComponent {

  @Input() favorites: Character[] = [];

  constructor() {}



}
