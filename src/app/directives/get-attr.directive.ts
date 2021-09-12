import { Attribute, Directive } from '@angular/core';

@Directive({
  selector: '[appGetAttr]'
})
export class GetAttrDirective {

  constructor(@Attribute("type") private type:String) { }
  ngAfterViewInit(){
    console.log('当前元素的type属性的值为:',this.type)
  }

}
