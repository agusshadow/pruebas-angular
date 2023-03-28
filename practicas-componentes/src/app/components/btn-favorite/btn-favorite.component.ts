import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-btn-favorite',
  templateUrl: './btn-favorite.component.html',
  styleUrls: ['./btn-favorite.component.sass']
})
export class BtnFavoriteComponent {

  @Output() addFavorite = new EventEmitter();

  @Input() character: Character = {};

  //entre los <> se indica el tipo de dato a emitir
  //@Output() addFavorite = new EventEmitter<string>();

  favorite(e: Event) {

    e.preventDefault();
    console.log('btn cliked');
    this.addFavorite.emit()
    this.saveLocalStorage(this.character)

    //dentro del emit se pasan los datos hacia el padre
    //this.addFavorite.emit()
  }

  saveLocalStorage(character: Character) {

    if (!localStorage.getItem('favorites')) {

      localStorage.setItem('favorites', JSON.stringify([character]));

    } else {

      let favorites: Character[] = JSON.parse(localStorage.getItem('favorites') || '');
      favorites.push(character);
      localStorage.setItem('favorites', JSON.stringify(favorites));

    }

  }

}
