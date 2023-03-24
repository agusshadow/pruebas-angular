import { Component } from '@angular/core';

import { Person } from './person.model'

/* decorador */
@Component({
  /* nombre del componente */
  selector: 'app-root',
  /* archivo html al que esta vinculado (template) */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* las variables deben ser publicas porque sino no pueden ser accedidas por el componente */
  title = 'prueba-angular';
  name: string = 'Agustin';
  age: number = 20;
  img: string = 'https://picsum.photos/200';
  btnDisabled: boolean = true;
  value: boolean = true
  valueModel = "";
  names: string[] = ['agustin', 'matias', 'catalina', 'esteban']
  peopleArray: Person[] = [
    {
        firstname: 'Freddy',
        lastname: 'Vega',
        age: 35
    },
    {
        firstname: 'Nicolas',
        lastname: 'Molina',
        age: 29,
        nickname: 'Nico'
    },
    {
        firstname: 'Ángela',
        lastname: 'Ocando',
        age: 30
    }
  ];

  switch() {
    this.value = !this.value
  }
}
