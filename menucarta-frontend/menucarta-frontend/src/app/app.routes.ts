import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta de redirección en caso de que la URL no coincida
];

