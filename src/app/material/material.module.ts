import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class MaterialModule { }
