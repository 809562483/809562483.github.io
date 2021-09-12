import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { D4Component } from './d4.component';


const routes: Routes = [
  { path: '', component: D4Component }
];

@NgModule({
  declarations: [
    D4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class D4Module { }
