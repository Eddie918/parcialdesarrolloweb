import { Routes } from '@angular/router';
import { LibroListComponent } from './libro-list/libro-list.component';
import { LibroFormComponent } from './libro-form/libro-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/libros', pathMatch: 'full' },  // Redirecciona la ruta base a '/libros'
  { path: 'libros', component: LibroListComponent },  // Muestra la lista de libros
  { path: 'libros/create', component: LibroFormComponent },  // Formulario para crear un nuevo libro
  { path: 'libros/edit/:id', component: LibroFormComponent }  // Formulario para editar un libro existente
];
