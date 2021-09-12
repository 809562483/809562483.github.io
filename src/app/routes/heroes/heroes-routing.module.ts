/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-05 08:43:52
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 17:09:18
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from '../compose-message/compose-message.component';
import { RouteComponent } from '../route/route.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerosListComponent } from './hero-list/heros-list.component';

const routes: Routes = [
  {
    path: "route", component: RouteComponent, children: [
      { path: "superheroes", component: HerosListComponent, data: { animation: "HeroList" } },
      { path: "superhero/:id", component: HeroDetailComponent },
      { path: "heroes", redirectTo: "superheroes" },
      { path: "hero/:id", redirectTo: "superhero/:id" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
