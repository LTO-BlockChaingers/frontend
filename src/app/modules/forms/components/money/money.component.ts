import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from '../../classes';
import { MoneyDefinition } from '@models/forms';

@Component({
  selector: 'lt-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: MoneyDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;
  currency: string = '$';
}
