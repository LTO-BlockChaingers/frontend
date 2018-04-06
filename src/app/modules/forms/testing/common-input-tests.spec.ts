import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LegalformsCommonModule } from '../legalforms-common.module';
import { Component, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../classes';
import { FieldDefinition } from '@models/forms';

/**
 * Set of tests for ALL input components.
 *
 * @param componentCtor component class
 * @param componentClassName name of component class to be visible in tests results
 * @param dummyDefinition field definition for provided test
 */
export function commonInputTests<T extends InputComponent>(
  componentCtor: Type<T>,
  componentClassName: string,
  dummyDefinition: FieldDefinition,
  skip: { initialValueCheck?: boolean } = {}
) {
  describe(componentClassName + ' (CommonInputTest)', () => {
    let component: T;
    let fixture: ComponentFixture<T>;
    let formGroup: FormGroup;
    const name = 'TEST_INPUT_NAME';

    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [NoopAnimationsModule, LegalformsCommonModule],
          declarations: [componentCtor]
        }).compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(componentCtor);
      component = fixture.componentInstance;
      formGroup = new FormGroup({});

      component.name = name;
      component.definition = dummyDefinition;
      component.formGroup = formGroup;
      component.value = dummyDefinition.value;
      component.formValue = {
        validation: {
          foo: 1
        }
      };

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it(
      'should use conrol name from "name" attribute',
      async(() => {
        setTimeout(() => {
          expect(formGroup.controls[name]).toBeTruthy();
        });
      })
    );

    it(
      'should remove formControl from group when component destroyed',
      async(() => {
        setTimeout(() => {
          expect(formGroup.controls[name]).toBeTruthy();
          component.ngOnDestroy();
          expect(formGroup.controls[name]).not.toBeTruthy();
        });
      })
    );

    if (!skip.initialValueCheck) {
      it(
        'should use provided initial value value',
        async(() => {
          setTimeout(() => {
            expect(formGroup.controls[name].value).toEqual(dummyDefinition.value);
          });
        })
      );
    }

    xit('shoud validate itself', () => {
      expect(formGroup.valid).toBe(true);
      component.formValue = {
        validation: {
          foo: 10
        }
      };
      component.definition.validation = 'validation.foo === 6';
      component.control.updateValueAndValidity();
      fixture.detectChanges();
      expect(formGroup.valid).toBe(false);
    });
  });
}
