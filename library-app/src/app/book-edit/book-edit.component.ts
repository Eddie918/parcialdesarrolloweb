import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(+id).subscribe((data: Book) => {
        this.book = data;
      });
    }
  }

  updateBook() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.updateBook(+id, this.book).subscribe(() => {
        this.navigate.emit('list');
      });
    }
  }
}
