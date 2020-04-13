import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef) { }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mousehover') onMouseEnter(){
    this.highlight('yellow')
  }

  @HostListener('stophover') onMouseLeave(){
    this.highlight(null)
  }

}
