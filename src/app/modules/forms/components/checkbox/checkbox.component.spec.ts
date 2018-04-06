import { CheckboxComponent } from './checkbox.component';
import { commonInputTests } from '../../testing/common-input-tests.spec';
import { CHECKBOX_DEFINITON_MOCK } from '../../testing/mocks';

commonInputTests(CheckboxComponent, 'forms/components/CheckboxComponent', CHECKBOX_DEFINITON_MOCK);
