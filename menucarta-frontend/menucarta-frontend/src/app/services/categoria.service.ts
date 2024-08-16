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
  //aca van los services para conectar con el backend
}


/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'https://tu-backend.com/api/categorias'; // URL de tu backend

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
}




  public getConocimientos(){
    return this.http.get<Conocimiento[]>(this.url+'/ver/conocimientos')
  }

  public crearConocimiento(obj:Conocimiento){
    return this.http.post<Conocimiento>(this.url+'/new/conocimiento',obj);
  }

  public borrarConocimiento(id:string){
    return this.http.delete(this.url+`/delete/conocimiento/${id}`);
  }

  public editarConocimiento(id:string){
    return this.http.get<Conocimiento>(this.url+`/buscar/conocimiento/${id}`);
  }
}
*/
