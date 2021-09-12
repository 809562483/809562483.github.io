/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-14 09:48:25
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-14 15:13:45
 */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.less'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class TestComponentComponent  {
  @Output() output = new EventEmitter()
  @Input() in = ""
  @Input('nickname') nickName = ""
  constructor() {
    console.log("我是构造函数")
   }
  // ngOnChanges(...rest:any){
  //   console.log("Test组件的onChanges钩子",rest[0].in.currentValue)
  // }
  // ngOnInit(...rest:any): void {
  //   console.log("Test组件的onInit钩子",rest)
  
  // }
  // ngDocheck(...rest:any): void {
  //   console.log("Test组件的doCheck钩子",rest)
  // }
  // ngAfterContentInit(...rest:any): void {
  //   console.log("Test组件的afterContentInit钩子",rest)
  // }
  // ngAfterContentChecked(...rest:any): void {
  //   console.log("Test组件的afterContentChecked钩子",rest)
  // }
  // ngAfterViewInit(...rest:any): void {
  //   console.log("Test组件的afterViewInit钩子",rest)
  // }
  // ngAfterViewChecked(...rest:any): void {
  //   console.log("Test组件的afterViewChecked钩子",rest)
  // }
  // ngOnDestroy(...rest:any): void {
  //   console.log("Test组件的onDestroy钩子",rest)
  // }

}
