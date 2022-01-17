import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../app/Servicios/libros.service';
import { Router } from '@angular/router';
import { LibrosResponseDto } from './libros';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
 
  libros:any;
  constructor(private _LibrosService: LibrosService,
    private _router: Router) { }

  ngOnInit(): void {
     this.getlibros()
  }

  getlibros() {
   this._LibrosService.ObtenerLibros().subscribe(data => {
     console.log(data);
     this.libros = data;
    });
  }
}