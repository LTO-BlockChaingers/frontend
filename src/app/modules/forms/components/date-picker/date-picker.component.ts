import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from '../../classes';
import { DateDefinition } from '@models/forms';

@Component({
  selector: 'lt-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: DateDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;
}
