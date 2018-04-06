import { commonInputTests } from '../../testing/common-input-tests.spec';
import { DatePickerComponent } from './date-picker.component';
import { DATE_DEFINITON_MOCK } from '../../testing/mocks';

commonInputTests(DatePickerComponent, 'forms/components/DatePickerComponent', DATE_DEFINITON_MOCK);
