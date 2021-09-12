/*
 * @Description: let bgc to lightblue
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-22 09:00:33
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-22 10:58:48
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = "lightblue"
  //属性型指令同样可以接收当前宿主组件上的其他自定义属性的值!!!!!!!!!!!!!!!!!
  @Input() defaultColor = ""
  @HostListener("mouseenter") enterHandler(){
    this.changeColor(this.appHighlight || this.defaultColor || "red")
  }
  @HostListener("mouseleave") leaveHandler(){
    this.changeColor("")
  }
  constructor(private a:ElementRef) { 
    
  }
  ngOnChanges(){
    // this.a.nativeElement.style.backgroundColor = this.appHighlight
  }
  changeColor(color:string){
    this.a.nativeElement.style.backgroundColor = color
  }
}
