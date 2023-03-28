import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character: Character = {};

  constructor() { }

  favorite() {
    console.log('favorite');

  }
}
