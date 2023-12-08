import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../../service/books-data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: any;
  constructor(private bookService: BooksDataService) {}

  ngOnInit() {
    this.bookService.fetchBooks().subscribe((data) => {
      console.log(data);
      this.books = data.items;
    });
  }
}
