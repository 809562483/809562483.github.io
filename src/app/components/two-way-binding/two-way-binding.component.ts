/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-15 09:36:09
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-15 10:06:57
 */
import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.less']
})
export class TwoWayBindingComponent implements OnInit {
  @Input() childrenData!:number
  @Output() childrenDataChange = new EventEmitter()
  constructor() { }
  
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    // this.childrenDataChange.subscribe((v)=>{
    //   console.log(v)
    // })
  }
  change(e:number){
    
    // console.log(this)
    this.childrenData+=e;
    // console.log(this.childrenData)
   
      this.childrenDataChange.emit(this.childrenData)
   
  }
}
