import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { LegalformsCommonModule } from '../../legalforms-common.module';

import { TextInputComponent } from '../text-input/text-input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { ExpressionComponent } from '../expression/expression.component';
import { GroupComponent } from '../group/group.component';
import { SelectComponent } from '../select/select.component';
import { StaticComponent } from '../static/static.component';
import { FormStepComponent } from '../form-step/form-step.component';
import { AmountComponent } from '../amount/amount.component';

import { GroupNamePipe } from '../../pipes/group-name.pipe';
import { FieldNamePipe } from '../../pipes/field-name.pipe';

import { FORM_METADATA_MOCK } from '../../testing/mocks';

xdescribe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, LegalformsCommonModule],
        declarations: [
          FormComponent,
          TextInputComponent,
          TextareaComponent,
          CheckboxComponent,
          DatePickerComponent,
          ExpressionComponent,
          GroupComponent,
          SelectComponent,
          StaticComponent,
          FormStepComponent,
          AmountComponent,
          GroupNamePipe,
          FieldNamePipe
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;

    component.metadata = FORM_METADATA_MOCK;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
