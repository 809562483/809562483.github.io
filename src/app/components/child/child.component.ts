import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() value !:number
  @Output() valueChange = new EventEmitter()

  changeValue(){
    this.valueChange.emit(Math.random()*100)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
