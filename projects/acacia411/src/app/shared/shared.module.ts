import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
