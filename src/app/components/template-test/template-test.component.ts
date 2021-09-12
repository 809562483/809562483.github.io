/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-21 09:22:51
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-21 11:15:32
 */
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-test',
  templateUrl: './template-test.component.html',
  styleUrls: ['./template-test.component.less']
})
export class TemplateTestComponent implements OnInit {
  show = true
  @ViewChild("view",{static:true}) view!:TemplateRef<any>
  ngAfterContentChecked(){
    // console.log(this.view)
  }
  constructor(private viewContainer: ViewContainerRef) { }
  @ViewChild("tpl",{static:true}) tpl!:TemplateRef<any>
  ngOnInit(): void {
    //以当前宿主元素<app-template-test>为准，在其后面插入一个兄弟节点，节点模板为tpl,节点数据为{ $implicit: "Helloooo", name: 'World' }
    // this.viewContainer.createEmbeddedView(this.tpl, { $implicit: "Helloooo", name: 'World' });
  }
  context = { $implicit: "Helloooo", _name: 'World' }
}
