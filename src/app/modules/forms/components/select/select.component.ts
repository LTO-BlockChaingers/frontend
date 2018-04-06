import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from '../../classes';
import { SelectDefinition } from '@models/forms';

@Component({
  selector: 'lt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: SelectDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;
}
