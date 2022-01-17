import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/app/Servicios/libros.service';
import { LibrosResponseDto } from '../libros/libros';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  libros: any
  termino: string;
  constructor(private activatedRoute: ActivatedRoute
    , private librosservice: LibrosService) { }

  ngOnInit(): void {
  
  
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.librosservice.filtrar( params['termino']).subscribe((resp: any) => {
        console.log(resp)
        this.libros = resp;
       });
      console.log(this.libros)
    });
      
    
    
  }
}




