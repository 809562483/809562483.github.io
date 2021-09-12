/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-22 08:53:32
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-22 09:57:23
 */
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {
  score = "D"
  constructor() {

   }

  ngOnInit(): void {
  }

}
