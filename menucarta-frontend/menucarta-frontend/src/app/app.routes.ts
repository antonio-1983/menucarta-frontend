import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PruebaComponent } from './components/prueba/prueba.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categoria/:id', component: CategoriaComponent },
  { path: 'prueba', component: PruebaComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Debe estar al final
];


