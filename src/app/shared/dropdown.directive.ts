import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[giDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false; 
  constructor() { }
  // @HostListener('mouseenter') mouseOver(){
  //   this.renderer.addClass(this.element.nativeElement,'open');
  // }
  // @HostListener('mouseleave') mouseLeave(){
  //   this.renderer.removeClass(this.element.nativeElement,'open');
  // }

  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
  }
}
