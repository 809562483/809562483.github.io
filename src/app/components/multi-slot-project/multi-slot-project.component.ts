import { Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import {SingleSlotProjectComponent} from "../single-slot-project/single-slot-project.component"
@Component({
  selector: 'app-multi-slot-project',
  templateUrl: './multi-slot-project.component.html',
  styleUrls: ['./multi-slot-project.component.less']
})
export class MultiSlotProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sayHello(){
    console.log("hello Im multi-slot-project")
  }
  @ContentChildren("c2") c2!:QueryList<SingleSlotProjectComponent>
  showInner(){
    this.c2.get(0)?.sayHello()
  }
}
