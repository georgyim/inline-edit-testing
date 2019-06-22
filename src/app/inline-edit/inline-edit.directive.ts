import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInlineEdit]'
})
export class InlineEditDirective implements OnInit {

  private _isEdit = false;

  @Input() editTemplate: TemplateRef<any>;

  @Input() simpleTemplate: TemplateRef<any>;

  @Input() set isEdit(value: boolean) {
    this._isEdit = value;
    this.viewContainer.clear();
    this.setTemplate();
  }

  constructor(
    private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.setTemplate();
  }

  private setTemplate() {
    this.viewContainer.createEmbeddedView(this._isEdit ? this.editTemplate : this.simpleTemplate);

  }

}

