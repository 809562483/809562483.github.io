/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-14 15:33:06
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-14 15:55:52
 */
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-version',
  templateUrl: './show-version.component.html',
  styleUrls: ['./show-version.component.less']
})
export class ShowVersionComponent implements OnInit {
  @Input() minor =  0;
  @Input() major = 0;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    for(let propName in changes){
      let prop = changes[propName];
      if(prop.isFirstChange()){
        console.warn(`init version ${propName}:${prop.currentValue}`)
      }else{
        console.warn(`change version ${propName}:${prop.currentValue}`)
      }
    }
  }
}
