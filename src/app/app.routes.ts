import { Routes } from "@angular/router";
import { AmazonComponent } from "./amazon/amazon.component";
import { ExerciciosComponent } from "./exercicios/exercicios.component";
import { FacebookComponent } from "./facebook/facebook.component";
import { GeiselComponent } from "./geisel/geisel.component";

import { HomeComponent } from "./home/home.component";
import { NovidadesComponent } from "./novidades/novidades.component";
import { SpotifyComponent } from "./spotify/spotify.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'spotify', component: SpotifyComponent},
  {path: 'facebook', component: FacebookComponent},
  {path: 'amazon', component: AmazonComponent},
  {path: 'novidades', component: NovidadesComponent},
  {path: 'exercicio', component: ExerciciosComponent},
  {path: 'geisel', component: GeiselComponent}
]
