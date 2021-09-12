import { Component, OnInit } from '@angular/core';
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.less'],
  animations:[
    trigger('animation2',[
        // transition(
        //   "HeroList <=> HeroDetail",[
        //     style({position:"relative"}),
        //     query(":enter",style({
        //       position:"absolute",
        //       left:"100%"
        //     })),
        //     query(":enter",animate(1000,style({
        //       // position:"absolute",
        //       // backgroundColor:"green",
        //       left:"0%"
        //       // fontSize:"70px"
        //     })))
        //   ]
        // ),
        transition(
          "*=> HeroList",[
            style({position:"relative"}),
            query(":enter",style({
              position:"absolute",
              left:"-100%"
            })),
            query(":enter",animate(300,style({
              // position:"absolute",
              // backgroundColor:"green",
              left:"0%"
              // fontSize:"70px"
            }))),
            query(":enter",animateChild())
          ]
        ),
    ])
  ]
})
export class RouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getPage(outlet:RouterOutlet){
    // console.log("1111111111111111111111111111")
    // console.log(outlet?.activatedRouteData?.animation)
  
       return outlet?.activatedRouteData?.animation
  }
}
