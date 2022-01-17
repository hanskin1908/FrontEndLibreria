import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {APP_ROUTING} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'



import { AppComponent } from './app.component';
import { LibroTarjetaComponent } from './Components/libro-tarjeta/libro-tarjeta.component';
import { LibroComponent } from './Components/libro/libro.component';
import { LibrosComponent } from './Components/libros/libros.component';
import { HomeComponent } from './Components/home/home.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { LibrosService } from './app/Servicios/libros.service';


@NgModule({
  declarations: [
    AppComponent,
    LibroTarjetaComponent,
    LibroComponent,
    LibrosComponent,
    HomeComponent,
    BuscadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
