import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './models/categoria.model';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,HttpClientModule], // Agrega CommonModule aquí
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
}
/*
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './models/categoria.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
}

*/