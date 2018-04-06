import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LegalformsCommonModule } from './legalforms-common.module';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ExpressionComponent } from './components/expression/expression.component';
import { GroupComponent } from './components/group/group.component';
import { SelectComponent } from './components/select/select.component';
import { StaticComponent } from './components/static/static.component';
import { FormStepComponent } from './components/form-step/form-step.component';
import { FormComponent } from './components/form/form.component';
import { AmountComponent } from './components/amount/amount.component';
import { MoneyComponent } from './components/money/money.component';

import { GroupNamePipe } from './pipes/group-name.pipe';
import { FieldNamePipe } from './pipes/field-name.pipe';

@NgModule({
  imports: [LegalformsCommonModule],
  declarations: [
    TextInputComponent,
    TextareaComponent,
    CheckboxComponent,
    DatePickerComponent,
    ExpressionComponent,
    GroupComponent,
    SelectComponent,
    StaticComponent,
    FormStepComponent,
    FormComponent,
    AmountComponent,
    MoneyComponent,
    // Pipes
    GroupNamePipe,
    FieldNamePipe
  ],
  exports: [FormComponent]
})
export class FormsModule {}
