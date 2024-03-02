import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSeven]'
})
export class SevenDirective {

  constructor(private _elementRef: ElementRef) { }

  @HostListener('keyup')
  check(){
    if(this._elementRef.nativeElement.value.length>6){
      this._elementRef.nativeElement.value = this._elementRef.nativeElement.value.slice(0,7);
    }
  }

}
