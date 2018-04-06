import { OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
  ValidatorFn,
  AsyncValidatorFn
} from '@angular/forms';
import { FieldDefinition } from '@models/forms';
import { interpolate } from '../utils';

export abstract class InputComponent implements OnDestroy, OnInit {
  abstract name: string;
  abstract formGroup: FormGroup;
  abstract definition: FieldDefinition;
  abstract value: any;
  // Our fields decids are they valid or not
  // We have 'validation' string in FieldDefinition
  // To check is field valid we need whole form data
  abstract formValue: any;

  abstract control: FormControl;

  ngOnInit() {
    if (!this.definition) {
      throw '[definition] requred!';
    }
    if (!this.name) {
      throw '[name] required!';
    }
    if (!this.formGroup) {
      throw '[formGroup] required!';
    }

    const validators: ValidatorFn[] = [];
    const asyncValidators: AsyncValidatorFn[] = [];

    this.control = new FormControl(this.value);
    if (this.definition.validation) {
      asyncValidators.push((control: AbstractControl) => {
        return new Promise<any>(resolve => {
          setTimeout(() => {
            const isValid = interpolate(this.definition.validation, this.formValue || {});
            if (!isValid) {
              resolve({
                customValidation: true
              });
            } else {
              resolve(null);
            }
          });
        });
      });
    }

    if (this.definition.required) {
      validators.push(Validators.required);
    }

    this.control.setValidators(validators);
    this.control.setAsyncValidators(asyncValidators);

    Promise.resolve(null).then(() => {
      this.formGroup.addControl(this.name, this.control);
    });
  }

  ngOnDestroy() {
    this.formGroup.removeControl(this.name);
  }
}
