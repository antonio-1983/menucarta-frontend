import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url:string = environment.apiUrl
  constructor(private http:HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url+"/categorias");
  }

    // Método para obtener una categoría por ID
  getCategoriaPorId(id: number): Observable<Categoria> {
    //return this.http.get<Categoria>(`${this.url}/categorias/${id}`);
    return this.http.get<Categoria>(`http://localhost:8080/api/categorias/${id}`);
  }
}

