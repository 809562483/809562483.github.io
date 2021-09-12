import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Hero } from '../hero';
import {HeroService} from "../hero.service"
import { timer, interval, of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  hero$!:Observable<Hero|undefined>
  id!:number
  name = "123456"
  constructor(private activeRoute:ActivatedRoute ,private heroService: HeroService,private router:Router) { 
    // this.id = Number(this.activeRoute.snapshot.paramMap.get("id"))
    // const t = interval(500)
    // t.pipe(
    //   switchMap((v)=>of(v**2))
    // ).subscribe(v=>console.log(v))
  }

  ngOnInit() {
    this.hero$ = this.activeRoute.paramMap.pipe(
      switchMap(paramMap=>this.heroService.getHero(Number(paramMap.get("id"))))
    )
  }
  back(){
    this.hero$.subscribe(hero=>{
      this.router.navigate(['route/heroes',{selectedId:hero?.id}])
    })
  }
}
