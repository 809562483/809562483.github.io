/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-06-30 10:36:23
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-01 17:33:36
 */
import { Component } from '@angular/core';
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations:[
    trigger('animation1',[
      state("HeroesPage",style({
        
        backgroundColor:"yellow"
      })),
      state("HeroPage",style({
        
        backgroundColor:"violet"
      })),
      // transition("HeroesPage<=>HeroPage",[
      //   animate(300)
      // ]),
      transition("HeroesPage <=> HeroPage",[
        style({ position: 'relative' }),
        query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          // width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      // query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      // query(':enter', animateChild()),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'my-first-angulardsadasdasd';
  getPage(outlet:RouterOutlet){
    // console.log("1111111111111111111111111111")
    // console.log(outlet?.activatedRouteData?.animation)
    console.log(outlet?.activatedRouteData?.animation)
       return outlet?.activatedRouteData?.animation
  }
}
