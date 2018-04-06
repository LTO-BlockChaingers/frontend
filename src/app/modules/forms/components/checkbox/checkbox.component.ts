import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from '../../classes';
import { CheckboxDefinition } from '@models/forms';

@Component({
  selector: 'lt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: CheckboxDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;
}
