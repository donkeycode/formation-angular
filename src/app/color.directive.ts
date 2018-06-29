import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostListener('click', ['$event'])
  onClick() {
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }

  @HostBinding('class.border-red') private isRed = true;
  @HostBinding('class.border-blue') private isBlue = false;
}
