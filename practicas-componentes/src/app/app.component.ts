import { Component, OnInit } from '@angular/core';
import { Character } from './models/character.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'practicas-componentes';
  characters: Character[] = []

  ngOnInit(): void {

    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.characters = data.results
        console.log(this.characters);
      })
  }

}
