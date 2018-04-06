import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../../classes';
import { GroupDefinition } from '@models/forms';

@Component({
  selector: 'lt-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent extends InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() definition!: GroupDefinition;
  @Input() name!: string;
  @Input() value!: any;
  @Input() formValue!: any;

  control!: FormControl;

  toggleCheckbox() {
    console.log('Toggle');
  }
}
