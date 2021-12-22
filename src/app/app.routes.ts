import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { SpotifyComponent } from "./spotify/spotify.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'spotify', component: SpotifyComponent},
]
