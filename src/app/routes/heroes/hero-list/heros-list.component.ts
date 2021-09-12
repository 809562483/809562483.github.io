/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-05 08:43:52
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 16:10:17
 */
import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.less'],
  animations:[
    trigger("animation3",[
      transition(":enter",[
        query("li,input",[
          style({
            transform:"translateY(-50px)",
            opacity:"0"
          }),
          stagger(30,
            animate("300ms ease-out",style({
              transform:"*",
              opacity:"*"
            })))
        ])
      ])
    ]),
    trigger("totalChange",[
      transition(":increment",[
        query(":enter",[
          style({
            width:"0px",
            opacity:"0"
          }),
          stagger(30,animate("300ms ease-out",style({
            width:"*",
            opacity:"*"
          })))
        ],{ optional: true })
      ]),
      transition(":decrement",[
        query(":leave",[
          style({
            width:"*",
            opacity:"*"
          }),
          stagger(30,animate("300ms ease-out",style({
            width:"0",
            opacity:"0"
          })))
        ])
      ])
    ])
  ]
})
export class HerosListComponent implements OnInit {
  @HostBinding('@animation3') animation3 = true
  total = -1
  isOpen:boolean = true
  selectedHero?: Hero;

  heroes$!:Observable<Hero[]>
  heross$!:Hero[]
selectedId:Number|undefined
  constructor(private heroService: HeroService, private messageService: MessageService,
    private router:Router,private activeRoute:ActivatedRoute
    ) { }

  ngOnInit() {

    this.getHeroes();
    this.activeRoute.paramMap.subscribe(paramMap=>{this.selectedId =Number(paramMap.get("selectedId"))})
    
  }
  showAnimationEvent(e:any){
      console.log(e)
  }
  search(v:String){
    v = v.trim()

    this.heroService.getHeroes().pipe(
      switchMap(
        arr=>{
          let newArr = arr.filter(e=>e.name.toUpperCase().includes(v.toUpperCase()))
          // if (this.total !== newArr.length) {
          //   this.total = newArr.length;
          // } else if (!v) {
          //   this.total = -1;
         
          return of(newArr)
        }
      )
    ).subscribe(arr=>{
      this.heross$ = arr
      this.total = arr.length
    })
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.router.navigate(['../hero',hero.id],{relativeTo:this.activeRoute})
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(arr=>{
      //视图的更改跟动画的触发必须顺序执行(一个变更检测周期)
      this.heross$ = arr
      this.total = arr.length
    })
       
  }

}
