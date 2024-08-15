import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // Importa el archivo de rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas en el módulo de enrutamiento
  exports: [RouterModule] // Exporta el RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
