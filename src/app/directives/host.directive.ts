import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor(public container:ViewContainerRef) { }

}
