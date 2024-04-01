import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBgColorBlueguindiko]'
})
export class BgColorBlueguindikoDirective{
@HostBinding('style.backgroundColor') backgroundColor : string;
  constructor() {
    this.backgroundColor = "#00225A"
   }

}
