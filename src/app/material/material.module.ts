import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
  ],
  exports: [
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
  ],
})
export class MaterialModule { }
