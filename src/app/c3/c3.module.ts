import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { C3Component } from './c3.component';


const routes: Routes = [
  { path: '', component: C3Component }
];

@NgModule({
  declarations: [
    C3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class C3Module { }
