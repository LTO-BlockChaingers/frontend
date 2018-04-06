import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from '../../classes';
import { AmountDefinition } from '@models/forms';

@Component({
  selector: 'lt-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: AmountDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;
}
