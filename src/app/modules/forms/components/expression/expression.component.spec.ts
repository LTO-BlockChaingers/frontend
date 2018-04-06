import { commonInputTests } from '../../testing/common-input-tests.spec';
import { ExpressionComponent } from './expression.component';
import { FormGroup } from '@angular/forms';
import { EXPRESSION_DEFINITION_MOCK } from '../../testing/mocks';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LegalformsCommonModule } from '../../legalforms-common.module';

commonInputTests(
  ExpressionComponent,
  'forms/components/ExpressionComponent',
  EXPRESSION_DEFINITION_MOCK,
  {
    initialValueCheck: true
  }
);

describe('forms/components/ExpressionComponent', () => {
  let component: ExpressionComponent;
  let fixture: ComponentFixture<ExpressionComponent>;
  let formGroup: FormGroup;
  const name = 'TestExpression';

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [LegalformsCommonModule],
        declarations: [ExpressionComponent]
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;
    formGroup = new FormGroup({});

    component.name = name;
    component.definition = EXPRESSION_DEFINITION_MOCK;
    component.formGroup = formGroup;
    component.formValue = { a: 2, b: 3 };

    fixture.detectChanges();
  });

  it(
    'should evaluate expression',
    async(() => {
      setTimeout(() => expect(formGroup.controls[name].value).toBe(5));
    })
  );
});
