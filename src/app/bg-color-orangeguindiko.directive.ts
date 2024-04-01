import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBgColorOrangeguindiko]'
})
export class BgColorOrangeguindikoDirective {
@HostBinding('style.backgroundColor') backgroundColor : string;
  constructor() {
    this.backgroundColor ="#E68513"
  }

}
