import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {

  @Input() character: Character = {};

  constructor() { }
}
