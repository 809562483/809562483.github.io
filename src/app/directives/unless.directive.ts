import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  hasView = false

  //angular会自动在构造函数中注入当前指令所绑定的宿主组件的各类引用
  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }
  //当前指令可接收输入参数，并根据参数渲染当前宿主组件
  @Input()
   set appUnless(condition:boolean){
    //condition为假并且当前宿主组件还未渲染
    if(!condition&&!this.hasView){
      //渲染组件
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.hasView = true
    }else if(condition&&this.hasView){
      //condition为真且当前组件已经渲染，则去清空
      this.viewContainer.clear()
      this.hasView = false
    }
   }
}
