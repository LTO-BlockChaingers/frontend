import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { InputComponent } from '../../classes';
import {
  TextDefinition,
  EmailDefinition,
  PasswordDefinition,
  NumberDefinition
} from '@models/forms';

@Component({
  selector: 'lt-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: TextDefinition | EmailDefinition | PasswordDefinition | NumberDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;
  get type(): 'text' | 'email' | 'password' | 'number' {
    switch (this.definition.type) {
      case 'Text':
        return 'text';
      case 'Email':
        return 'email';
      case 'Password':
        return 'password';
      case 'Number':
        return 'number';
      default:
        return 'text';
    }
  }

  control!: FormControl;
}
