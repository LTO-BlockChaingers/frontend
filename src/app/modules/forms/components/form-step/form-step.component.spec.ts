import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepComponent } from './form-step.component';
import { FormGroup } from '@angular/forms';

describe('FormStepComponent', () => {
  let component: FormStepComponent;
  let fixture: ComponentFixture<FormStepComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormStepComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStepComponent);
    component = fixture.componentInstance;
    component.name = 'TestFormStep';
    component.form = new FormGroup({});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
