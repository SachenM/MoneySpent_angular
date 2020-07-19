import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @HostBinding('style.backgroundColor') BgColor:string = 'yellow'; 

  @HostListener('mouseenter') mouseHover(){
    this.BgColor = 'Blue';

  }

  constructor(private elref:ElementRef) { }

}
