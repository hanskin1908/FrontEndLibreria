import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LibrosComponent } from './Components/libros/libros.component';
import { LibroComponent } from './Components/libro/libro.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';




  
  
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'libros', component: LibrosComponent },
  { path: 'libro/:id', component: LibroComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**',pathMatch: 'full', redirectTo: 'home' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
