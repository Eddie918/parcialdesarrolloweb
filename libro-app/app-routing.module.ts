import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroListComponent } from './src/app/libro-list/libro-list.component';
import { LibroFormComponent } from './src/app/libro-form/libro-form.component';
const routes: Routes = [
    { path: '', component: LibroListComponent },
    { path: 'add', component: LibroFormComponent },
    { path: 'edit/:id', component: LibroFormComponent },
    { path: 'view/:id', component: LibroFormComponent }
    { path: 'view/:id', component: LibroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
