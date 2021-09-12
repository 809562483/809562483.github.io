import { Component, ElementRef, EventEmitter, OnInit, Output, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-single-slot-project',
  templateUrl: './single-slot-project.component.html',
  styleUrls: ['./single-slot-project.component.less']
})
export class SingleSlotProjectComponent implements OnInit {
  @Output() outer = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sayHello(){
    console.log("hello Im single-slot-project")
    
    this.outer.next("123321")
  }
}
