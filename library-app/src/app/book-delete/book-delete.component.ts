import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book | undefined;

  @Output() navigate = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(+id).subscribe((data: Book) => {
        this.book = data;
      });
    }
  }

  deleteBook() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.deleteBook(+id).subscribe(() => {
        this.navigate.emit('list');
      });
    }
  }
}