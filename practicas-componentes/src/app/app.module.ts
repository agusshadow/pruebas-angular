import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListFavoritesComponent } from './components/list-favorites/list-favorites.component';
import { BtnFavoriteComponent } from './components/btn-favorite/btn-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    NavbarComponent,
    ListFavoritesComponent,
    BtnFavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
