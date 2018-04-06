import { commonInputTests } from '../../testing/common-input-tests.spec';
import { TextInputComponent } from './text-input.component';
import { TEXT_DEFINITON_MOCK } from '../../testing/mocks';

commonInputTests(TextInputComponent, 'forms/components/TextInputComponent', TEXT_DEFINITON_MOCK);
