import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef, // wrapping element, add remove element
    private templateRef: TemplateRef<any>,   // whatever elements are placed inside
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for(let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {index: i});      
    }    
  }
}
