import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from '../../classes';
import { ExpressionDefinition } from '@models/forms';
import { interpolate } from '../../utils';

@Component({
  selector: 'lt-expression',
  template: ''
})
export class ExpressionComponent extends InputComponent implements OnInit, OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() definition!: ExpressionDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;

  ngOnInit() {
    super.ngOnInit();
    this.setValue();
  }

  ngOnChanges() {
    this.setValue();
  }

  private setValue() {
    if (this.control) {
      const newValue = interpolate(this.definition.expression, this.formValue || {});
      if (newValue !== this.control.value) {
        this.control.setValue(interpolate(this.definition.expression, this.formValue || {}));
      }
    }
  }
}
