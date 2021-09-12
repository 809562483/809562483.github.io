/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-03 09:01:31
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-03 11:04:35
 */
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-outer1',
  templateUrl: './outer1.component.html',
  styleUrls: ['./outer1.component.less']
})
export class Outer1Component implements OnInit {
  //必选参数
  id!:number
  //可选参数
  name!:string
  age!:number
  //查询参数
  gender!:string
  score!:number
  constructor(private router:Router,private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    //获取必选参数:id
/*     this.id = Number.parseInt(this.route.snapshot.paramMap.get("id")!) */
    this.route.paramMap.subscribe(params=>{
      this.id =Number.parseInt(params.get("id")!)
    })
    //获取可选参数;XXX=xxx;YYY=YYY
/*     this.name = this.route.snapshot.paramMap.get("name")!
    this.age = Number.parseInt(this.route.snapshot.paramMap.get("age")!) */
    this.route.paramMap.subscribe(paramMap=>{
      this.name = paramMap.get("name")!
      this.age = Number.parseInt(paramMap.get("age")!)
    })
    //获取查询参数?XXX=xxx&YYY=yyy
/*     this.gender = this.route.snapshot.queryParamMap.get("gender")!
    this.score =Number.parseInt(this.route.snapshot.queryParamMap.get("score")!) */
    this.route.queryParamMap.subscribe(queryParamMap=>{
    this.gender = queryParamMap.get("gender")!
    this.score = Number.parseInt(queryParamMap.get("score")!)
    })
    console.log(`id:${this.id}||name:${this.name},age:${this.age}||gender:${this.gender},score:${this.score}`)
    // console.log(`queryParams:`,this.route.snapshot.queryParams.gender,this.route.snapshot.queryParamMap)
  }
  jumpToInner2(){
    this.router.navigate(["inner2"],{relativeTo:this.route,queryParamsHandling:"preserve"})
  }
}
