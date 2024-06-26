import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { 
        path: ':id',
        component: BookDetailsComponent,
      },
      {
        path: '',
        component: BooksComponent,
      }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
