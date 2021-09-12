/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-05 08:43:52
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 16:48:51
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { T5Component } from './t5.component';


const routes: Routes = [
  { path: '', component: T5Component }
];

@NgModule({
  declarations: [
    T5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class T5Module { }
