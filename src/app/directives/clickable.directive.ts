import {Directive, ElementRef} from "@angular/core"

@Directive({
  selector:'[appClickable]'
})
export class ClickableDirective{
  constructor(el:ElementRef){
      el.nativeElement.addEventListener('click',function(){
        console.log("a! 我被点了!")
      })
  }

}