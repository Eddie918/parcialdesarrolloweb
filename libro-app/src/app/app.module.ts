import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LibroListComponent } from './libro-list/libro-list.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    LibroListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    LibroFormComponent // Add LibroFormComponent to the imports array
  ],
  providers: []
})
export class AppModule {}
