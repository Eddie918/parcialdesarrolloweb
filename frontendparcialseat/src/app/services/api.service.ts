import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getData() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api'; // Asegúrate de que esta URL coincida con la URL de tu backend

  constructor(private http: HttpClient) { }

  // Ejemplo de método GET
  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/items`);
  }

  // Ejemplo de método POST
  createItem(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/items`, item);
  }

  // Otros métodos (PUT, DELETE) pueden agregarse aquí de manera similar
}
