import { Component, Output, EventEmitter } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  book: Book = {
    nombre: '',
    autor: '',
    fechaDeEscritura: '',
    numeroDeEdicion: 1,
    precio: 0,
    tipo: '',
    famaEscritor: ''
  };

  @Output() navigate = new EventEmitter<string>();

  constructor(private bookService: BookService) { }

  addBook() {
    this.bookService.addBook(this.book).subscribe(() => {
      this.navigate.emit('list');
    });
  }
}
