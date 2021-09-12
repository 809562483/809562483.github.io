import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.less']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = "helei"
  age = 18
  name1 = "helei"
  age1 = 18
  submit() {
    console.log(this.name)
    console.log(this.age)
  }
  submit1() {
    console.log(this.name1)
    console.log(this.age1)
  }

}
