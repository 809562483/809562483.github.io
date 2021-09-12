/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-14 15:20:13
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-14 15:23:39
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.less']
})
export class ShowNameComponent implements OnInit {
  private _name = ""
  @Input() set name(name:string){
    this._name = name&&name.trim() || '<name no set>'
  }
  get name():string{
    return this._name
  }
  constructor() { }

  ngOnInit(): void {
  }

}
