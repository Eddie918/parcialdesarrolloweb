import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './libro.model';  // Asegúrate de ajustar la ruta según tu estructura de archivos

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient) { }

  getAllLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}`);
  }

  getLibroById(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
  }

  createLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${this.apiUrl}`, libro);
  }

  updateLibro(id: number, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}/${id}`, libro);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
