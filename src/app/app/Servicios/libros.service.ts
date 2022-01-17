import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LibrosResponseDto } from '../../Components/libros/libros';



@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'Libroes';

  public filtrar(termino: String){
    
    return this.http.get(`${this.apiURL}/filtro/${termino}`)
    
  }

  public ObtenerLibros(){
    return this.http.get(`${this.apiURL}`);
  }


 



 
}
