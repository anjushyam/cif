import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appValidate]'
})

export class ValidateDirective {
  @Input('appValidate') validateControl;
  @Input() requiredErrorMessage = 'Required field';
  @Input() patternErrorMessage = 'Invalid pattern';
  @Input() showErrorMessage = true;

  constructor(private ele: ElementRef, private renderer: Renderer2) { }

  @HostListener('input') OnChanges() {
    let spanEle = this.renderer.nextSibling(this.ele.nativeElement);
    if (spanEle) {
      this.renderer.removeClass(this.ele.nativeElement, 'has-error');
      this.renderer.removeChild(this.renderer.parentNode(this.ele.nativeElement), spanEle);
    }

    if ((this.validateControl.dirty || this.validateControl.touched) && this.validateControl.invalid ) {
      this.renderer.addClass(this.ele.nativeElement, 'has-error');

      spanEle = this.renderer.createElement('span');
      this.renderer.addClass(spanEle, 'text-danger');

      if (this.showErrorMessage) {
        let text = this.renderer.createText(this.requiredErrorMessage);
        if (this.validateControl.errors.pattern) {
          text = this.renderer.createText(this.patternErrorMessage);
        }
        this.renderer.appendChild(spanEle, text);
      }

      this.renderer.appendChild(this.renderer.parentNode(this.ele.nativeElement), spanEle);
    }
  }
}
