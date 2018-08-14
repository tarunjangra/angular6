import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[giDropdown]'
})
export class DropdownDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }
  @HostListener('mouseenter') mouseOver(){
    this.renderer.addClass(this.element.nativeElement,'open');
  }
  @HostListener('mouseleave') mouseLeave(){
    this.renderer.removeClass(this.element.nativeElement,'open');
  }
}
