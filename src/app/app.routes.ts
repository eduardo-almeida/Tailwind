import { Routes } from "@angular/router";
import { ExerciciosComponent } from "./exercicios/exercicios.component";
import { GeiselComponent } from "./geisel/geisel.component";

import { HomeComponent } from "./home/home.component";
import { SpotifyComponent } from "./spotify/spotify.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'spotify', component: SpotifyComponent},
  {path: 'exercicio', component: ExerciciosComponent},
  {path: 'geisel', component: GeiselComponent}
]
