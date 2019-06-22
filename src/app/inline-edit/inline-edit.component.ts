import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: [ './inline-edit.component.scss' ]
})
export class InlineEditComponent implements OnInit {

  isEdit = false;

  @HostListener('click', [ '$event.target' ])
  onClick() {
    if (!this.isEdit) {
      this.isEdit = true;
    }
    if (this.isEdit === true && !this.elRef.nativeElement.contains(event.target)) {
      this.isEdit = false;
    }
  }

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  close() {
    this.isEdit = false;
  }

}
