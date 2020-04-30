import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    //vendor
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,

    // material
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
