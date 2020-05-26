import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicNodeAnchor]'
})
export class DynamicNodeAnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
