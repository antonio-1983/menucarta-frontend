import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule donde esta el ng for
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule donde esta el ng for
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoriaId = params.get('id');
      if (categoriaId) {
        this.categoriaService.getCategoriaPorId(+categoriaId).subscribe(
          (categoria) => this.categoria = categoria,
          (error) => console.error('Error al cargar la categoría:', error)
        );
      }
    });
  }
}
