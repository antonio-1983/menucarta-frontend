import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url:string = environment.apiUrl
  constructor(private http:HttpClient) { }

  //aca van los services para conectar con el backend
}


/*


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
