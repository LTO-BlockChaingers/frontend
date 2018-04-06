import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lt-form-step',
  template: '<ng-content></ng-content>',
  styles: [],
  exportAs: 'ltFormStep'
})
export class FormStepComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Input() name!: string;
  control: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {
    if (!this.name) {
      throw '[name] required!';
    }

    this.form.addControl(this.name, this.control);
  }

  ngOnDestroy() {
    this.form.removeControl(this.name);
  }
}
