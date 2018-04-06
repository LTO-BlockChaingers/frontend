import { commonInputTests } from '../../testing/common-input-tests.spec';
import { TextareaComponent } from './textarea.component';
import { TEXTAREA_DEFINITON_MOCK } from '../../testing/mocks';

commonInputTests(TextareaComponent, 'forms/components/TextareaComponent', TEXTAREA_DEFINITON_MOCK);
