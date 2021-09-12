import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../subject.service"
@Component({
  selector: 'app-parent-communite-children',
  templateUrl: './parent-communite-children.component.html',
  styleUrls: ['./parent-communite-children.component.less']
})
export class ParentCommuniteChildrenComponent implements OnInit {
  input = ""
  fromParent :any= ""
  constructor(private subject:SubjectService) { 
    subject.parent.subscribe(e=>{
      this.fromParent = e
    })
  }

  ngOnInit(): void {
  }
  clickHandler(){
    this.subject.childrenPublish(this.input)
    this.input = ""
  }
}
