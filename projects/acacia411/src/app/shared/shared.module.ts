import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class SharedModule { }
