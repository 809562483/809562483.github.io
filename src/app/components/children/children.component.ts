/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-12 16:23:45
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-12 16:32:11
 */
import {Component, EventEmitter, Input, Output} from "@angular/core"

@Component({
    selector:"children-component",
    templateUrl:"./children.component.html",
    styleUrls:[
        "./children.component.less"
    ]
})
export class ChildrenComponent{
  value = "dasdasdfdsfsd"
  @Input()
  msg:string= ""
  @Output()
  trigger = new EventEmitter()
  changeFather(e:any){
    this.trigger.emit(e)
  }
}