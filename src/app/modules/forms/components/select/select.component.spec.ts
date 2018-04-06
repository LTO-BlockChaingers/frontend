import { commonInputTests } from '../../testing/common-input-tests.spec';
import { SelectComponent } from './select.component';
import { SELECT_DEFINITION_MOCK } from '../../testing/mocks';

commonInputTests(SelectComponent, 'forms/components/SelectComponent', SELECT_DEFINITION_MOCK);
