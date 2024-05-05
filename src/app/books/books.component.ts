import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BooksService } from './services/books.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../shared/models/book.model';
import { Title } from '@angular/platform-browser';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  providers: [BooksService],
})
export class BooksComponent implements OnInit, OnDestroy, AfterViewInit {
  private unsubscribe$: Subject<any> = new Subject();
  books!: Book[];
  displayedColumns: string[] = ['title', 'author', 'editorial', 'description'];
  dataSource!: MatTableDataSource<Book>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private booksService: BooksService, private title: Title) {
    title.setTitle("Books");
  }

  ngOnInit(): void {
    this.booksService.getBooks$().pipe(
      tap(b => {
        this.books = b;
        this.dataSource = new MatTableDataSource(this.books);
      }),
      takeUntil(this.unsubscribe$),
    ).subscribe();
    this.loadBooks();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  loadBooks() {
    this.booksService.loadBooks();
  }

  onSearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(undefined);
    this.unsubscribe$.complete();
  }
}
