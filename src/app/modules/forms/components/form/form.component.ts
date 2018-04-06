import { Component, OnInit, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  map,
  publishReplay,
  refCount,
  debounceTime,
  filter,
  distinctUntilChanged,
  tap
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { FormGroup } from '@angular/forms';
import { FormMetadata, FieldDefinition, StaticDefinition } from '@models/forms';
import { clean, interpolate } from '../../utils';

@Component({
  selector: 'lc-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  exportAs: 'lcForm'
})
export class FormComponent implements OnInit {
  @Input() metadata!: FormMetadata;
  @Input() initialValue: any = {}; // By default it is empty object.
  form: FormGroup = new FormGroup({});

  conditions: { [condition: string]: Observable<boolean> } = {};
  formData$: Observable<any>; // Clean form data
  @Output() valueChange: Observable<any>;

  @ViewChild('templateNotFoundTpl') templateNotFoundTpl!: TemplateRef<any>;
  @ViewChild('txtTpl') txtTpl!: TemplateRef<any>;
  @ViewChild('selectTpl') selectTpl!: TemplateRef<any>;
  @ViewChild('amoutnTpl') amoutnTpl!: TemplateRef<any>;
  @ViewChild('moneyTpl') moneyTpl!: TemplateRef<any>;
  @ViewChild('dateTpl') dateTpl!: TemplateRef<any>;
  @ViewChild('textareaTpl') textareaTpl!: TemplateRef<any>;
  @ViewChild('checkboxTpl') checkboxTpl!: TemplateRef<any>;
  @ViewChild('groupTpl') groupTpl!: TemplateRef<any>;
  @ViewChild('expressionTpl') expressionTpl!: TemplateRef<any>;

  get invalid(): boolean {
    return this.form.invalid;
  }

  constructor() {
    this.formData$ = this.form.valueChanges.pipe(
      map(val => clean(val)),
      map((val: any) => {
        return Object.keys(val).reduce((formValue: any, key) => {
          if (typeof val[key] === 'object' && val[key]) {
            // this is group and we have to clean up it
            const group = Object.keys(val[key]).reduce((groupValue, fieldName) => {
              if (val[key]) {
                return { ...groupValue, [fieldName]: val[key][fieldName] };
              } else {
                return groupValue;
              }
            }, {});

            // If group is empty -- do not include it
            return Object.keys(group).length ? { ...formValue, [key]: group } : formValue;
          } else {
            // This is simple field
            // If field is empty - do not include it into result
            return val[key] ? { ...formValue, [key]: val[key] } : formValue;
          }
        }, {});
      }),
      publishReplay(1),
      refCount()
    );

    // When our form initializes it puts inputs one by one
    // As a result we fire new 'change' event for each input
    // Put this event in the end of 'JS queue' to fire only one event
    // With all fields inside
    this.valueChange = this.formData$.pipe(debounceTime(0));
  }

  ngOnInit() {
    if (!this.metadata) {
      throw '[metadata] Required!';
    }
  }

  getCondition$(condition: string, group: string = ''): Observable<boolean> {
    const key = condition + group;
    if (!this.conditions[key]) {
      if (!condition) {
        // Always visible if no conditions
        this.conditions[key] = of(true);
      } else {
        // We need .merge over here because we need to kickstart form creation
        // if we just subscribe on form value we will never get initial value
        // because it will be kind of cycle dependency: ngIf waits for value to change
        // but form value cannot change because we cannot add fields until ngIf resolves
        this.conditions[key] = merge(of(clean(this.form.value)), this.formData$).pipe(
          map(model => interpolate(condition, model, group)),
          distinctUntilChanged(), // Trigger change detection on ngIf only if value changed
          publishReplay(1),
          refCount()
        );
      }
    }
    return this.conditions[key];
  }

  getTemplate(field: FieldDefinition | StaticDefinition): TemplateRef<any> {
    switch (field.type) {
      case 'Text':
      case 'Email':
      case 'Password':
      case 'Number':
        return this.txtTpl;
      case 'Select':
        return this.selectTpl;
      case 'Amount':
        return this.amoutnTpl;
      case 'Money':
        return this.moneyTpl;
      case 'Date':
        return this.dateTpl;
      case 'Textarea':
        return this.textareaTpl;
      case 'Checkbox':
        return this.checkboxTpl;
      case 'Group':
        return this.groupTpl;
      case 'Expression':
        return this.expressionTpl;
      default:
        return this.templateNotFoundTpl;
    }
  }

  valueFor(stepGroup: string, fieldName: string): any {
    if (!stepGroup) {
      return this.initialValue[fieldName];
    }
    return (this.initialValue[stepGroup] || {})[fieldName];
  }
}
