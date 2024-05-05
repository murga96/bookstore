import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../../../shared/models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  providers: [BooksService],
})
export class BookDetailsComponent implements OnInit{
  book: Book | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private booksServices: BooksService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params["id"];
      if(isNaN(Number(id))) {
        this.goBack();
      }
      this.book = this.booksServices.getBook(id);
    });
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
