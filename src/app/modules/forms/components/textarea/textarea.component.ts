import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from '../../classes';
import { TextareaDefinition } from '@models/forms';

@Component({
  selector: 'lt-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: TextareaDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;
}
