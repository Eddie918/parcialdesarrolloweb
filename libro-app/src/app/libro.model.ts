export interface Libro {
    id: number;
    titulo: string;
    autor: string;
    anioPublicacion: number;
    genero: string;
    descripcion?: string;  // La descripción es opcional
  }
  