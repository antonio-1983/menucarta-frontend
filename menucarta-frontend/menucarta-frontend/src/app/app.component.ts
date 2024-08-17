import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './models/categoria.model';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterModule,HttpClientModule], // RouterOutlet
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'menucarta-frontend';
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria[]) => {
        this.categorias = data;
      },
      error => {
        console.error('Error al obtener las categorías', error);
      }
    );
  }

  cerrarMenu(): void {
    // Encuentra el checkbox con el id 'btn-menu' y desmarca su selección
    const checkbox = document.getElementById('btn-menu') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }

}
