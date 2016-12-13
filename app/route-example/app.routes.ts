

import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
