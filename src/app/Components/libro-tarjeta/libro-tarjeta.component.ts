import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-libro-tarjeta',
  templateUrl: './libro-tarjeta.component.html',
  styleUrls: ['./libro-tarjeta.component.css']
})
export class LibroTarjetaComponent implements OnInit {

  @Input()  libro:any={};
   @Input()  index:number;

  
  constructor(
    private _router:Router
  ) { 


  }

  ngOnInit(): void {
  }


}
