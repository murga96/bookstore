import { Injectable } from '@angular/core';
import { BookDataAccessService } from '../../../interfaces/book-data-access.interface';
import { Book } from '../../../models/book.model';
import { books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksStaticService implements BookDataAccessService {

  constructor() { }
  findBooks(): Book[] {
    return books;
  }
  findBookById(id: string): Book | undefined {
    return books.find(e => e.id === id);
  }
}
