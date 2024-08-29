import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  // DOM in typescript like you get element in constructor

  // el:ElementRef
  // constructor(el:ElementRef) {
  //   this.el = el;
  //  }
  // or you can write with this two type
   constructor(public el:ElementRef){

   }

  @HostBinding("style.backgroundColor")
  bgColor = "red"

  @HostListener("mouseenter")
  changeFontSize(){
    // console.log('mouse enter')
    //to get element from html you should write nativeElement
    this.el.nativeElement.style.fontSize = "50px"
  }
  @HostListener("mouseleave")
  resetFontSize(){
    // console.log('mouse leaving')
    this.el.nativeElement.style.fontSize = "30px"
  }

}
