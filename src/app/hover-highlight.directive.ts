import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef) { }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null)
  }

}
