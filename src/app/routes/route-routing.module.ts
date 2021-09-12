/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-05 15:39:42
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 16:56:33
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { ComposeMessageComponent } from './compose-message/compose-message.component';


import { LoginComponent } from './login/login.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  {
    path: "route", component: RouteComponent, children: [


      // {path:"heroes-list",component:HerosListComponent},
      // { path: 'heroes-list', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
      // {path:"crisis-center",loadChildren:()=>import('./crisis-center/crisis-center.module').then(m=>m.CrisisCenterModule)},

      // {path:"login",component:LoginComponent},
      // { path: "heroes", loadChildren: () => import("./heroes/heroes.module").then(e => e.HeroesModule) },
      { path: "crisis-center", loadChildren: () => import("./crisis-center/crisis-center.module").then(e => e.CrisisCenterModule), data: { preload: true } },
      { path: "admin", loadChildren: () => import('./admin/admin.module').then(e => e.AdminModule), canLoad: [AuthGuard] },
      { path: "compose", component: ComposeMessageComponent, outlet: "popup" },
      { path: "default", redirectTo: "crisis-center" },
      { path: "", redirectTo: "/route/heroes", pathMatch: "full" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
