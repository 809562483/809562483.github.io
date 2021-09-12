/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-05 08:43:52
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 15:46:50
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"
import { NewsComponent } from './components/news/news.component';
import { Outer1Component } from './components/outer1/outer1.component';
import { Inner1Component } from './components/inner1/inner1.component';
import { Inner2Component } from './components/inner2/inner2.component';
import { Outer2Component } from './components/outer2/outer2.component';
import { MyGuard3Guard } from './guards/my-guard3.guard';
import { RouteComponent } from './routes/route/route.component';

import { HerosListComponent } from './routes/heroes/hero-list/heros-list.component';

import { LoginComponent } from './routes/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { D4Component } from './d4/d4.component';
import { ComposeMessageComponent } from './routes/compose-message/compose-message.component';
import { PreloadStrategyService } from './preload-strategy.service';

const routes: Routes = [
  {
    path: "news", component: NewsComponent, data: { animation: "HeroesPage" }, children: [

      // {path:"",component:TestComponent},
      // {path:"children",component:ChildrenComponent},

      {
        path: "outer1/:id", component: Outer1Component, children: [
          { path: "inner1", component: Inner1Component },
          { path: "inner2", component: Inner2Component }
        ],
      },
      {
        path: "outer2", component: Outer2Component, children: [
          { path: "inner1", component: Inner1Component },
          { path: "inner2", component: Inner2Component }
        ], canActivate: [MyGuard3Guard], canActivateChild: [MyGuard3Guard], canDeactivate: [MyGuard3Guard], canLoad: [MyGuard3Guard]
      },
      {
        path: "outer3", children: [
          { path: "", component: Inner1Component },
          { path: "", component: Inner2Component, }
        ]
      },
      { path: "", redirectTo: "outer2", pathMatch: "prefix" },

      { path: 'c3333', loadChildren: () => import('./c3/c3.module').then(m => m.C3Module), data: { preload: false } },
      // { path: 'd4444', loadChildren: () => import('./d4/d4.module').then(m => m.D4Module) },
      { path: 'd4444', component: D4Component, outlet: "r111" },


    ]
  },

  { path: "", redirectTo: "news", pathMatch: "full" },
  { path: 't5555', loadChildren: () => import('./t5/t5.module').then(m => m.T5Module), data: { preload: true } },
  { path: 'http', loadChildren: () => import('./http/http.module').then(m => m.HttpModule), data: { preload: true } },
  { path: "**", component: PagenotfoundComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      // {useHash:false}
      {
        preloadingStrategy: PreloadStrategyService
      }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
