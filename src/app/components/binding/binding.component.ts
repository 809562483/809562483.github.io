import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.less']
})
export class BindingComponent implements OnInit {
  name = "helei"
  constructor() { }

  ngOnInit(): void {
  }
  withOutNgModel(e:any){
    return e.target.value
  }
  fatherValue = 0
  changeFatherValue(){
    this.fatherValue = Math.random()*100
  }
}
