import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {ComponentComponent} from "../component/component.component"
@Component({
  selector: 'app-component-factory-resolver',
  templateUrl: './component-factory-resolver.component.html',
  styleUrls: ['./component-factory-resolver.component.less']
})
export class ComponentFactoryResolverComponent implements OnInit {

  constructor(public factory:ComponentFactoryResolver) { }
  @ViewChild("tpl",{read:ViewContainerRef}) tpl!:ViewContainerRef
  ngOnInit(): void {
  }
  render(){
    const cf = this.factory.resolveComponentFactory(ComponentComponent)
    //c为angular定义的组件的引用对象 通过c.instance可以获得组件对象
    let c = this.tpl.createComponent(cf)
    console.log(c.instance)
  }
}
