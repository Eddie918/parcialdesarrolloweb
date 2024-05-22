import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LibroService } from '../libro.service';
import { Libro } from '../libro.model';  

@Component({
  selector: 'app-libro-list',
  standalone: true, // Add standalone flag
  imports: [CommonModule, RouterModule], // Import RouterModule
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {
  libros: Libro[] = [];
  router: any;

  constructor(private libroService: LibroService) {}

  ngOnInit() {
    this.loadLibros();
  }

  loadLibros() {
    this.libroService.getAllLibros().subscribe({
      next: (data) => {
        this.libros = data;
      },
      error: (error) => {
        console.error('Error al obtener libros:', error);
      }
    });
  }

  editLibro(libroId: number) {
    this.router.navigate(['/libros/edit', libroId]);  // Navega a la ruta de edición con el ID del libro
  }
  
  deleteLibro(libroId: number) {
    this.libroService.deleteLibro(libroId).subscribe({
      next: () => {
        console.log('Libro eliminado');
        this.loadLibros();  // Recarga la lista de libros después de eliminar
      },
      error: (error) => {
        console.error('Error al eliminar libro:', error);
      }
    });
  }
  
}
