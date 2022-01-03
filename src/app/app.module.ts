import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { GeiselComponent } from './geisel/geisel.component';
import { FacebookComponent } from './facebook/facebook.component';
import { AmazonComponent } from './amazon/amazon.component';
import { NovidadesComponent } from './novidades/novidades.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    HomeComponent,
    ExerciciosComponent,
    GeiselComponent,
    FacebookComponent,
    AmazonComponent,
    NovidadesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
