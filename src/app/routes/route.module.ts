/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-05 15:39:42
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 17:03:46
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { HerosListComponent } from './heroes/hero-list/heros-list.component';
import { RouteComponent } from './route/route.component';


import { LoginComponent } from './login/login.component';
import { HeroesModule } from './heroes/heroes.module';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';


import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crises-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [HerosListComponent,
    RouteComponent,
    CrisisDetailComponent,
    CrisisListComponent,


    LoginComponent,
    HeroDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    ComposeMessageComponent,
  ],
  imports: [

    CommonModule,

    FormsModule,



    AuthModule,

    HeroesModule,

    RouteRoutingModule,

  ]
})
export class RouteModule { }
