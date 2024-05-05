import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Book } from '../../shared/models/book.model';
import { BooksStaticService } from '../../shared/services/data-access/books/books-static.service';

@Injectable()
export class BooksService {
  private books$: BehaviorSubject<Book[]>;

  constructor(private bookDataAccessService: BooksStaticService) {
    this.books$ = new BehaviorSubject<Book[]>([]);
  }

  getBooks$(): Observable<Book[]> {
    return this.books$.asObservable();
  }

  getBooks(): Book[] {
    return this.books$.getValue();
  }

  loadBooks() {
    this.books$.next(this.bookDataAccessService.findBooks());
  }

  getBook(id: string): Book | undefined {
    return this.bookDataAccessService.findBookById(id);
  }
}
