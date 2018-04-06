import { commonInputTests } from '../../testing/common-input-tests.spec';
import { AmountComponent } from './amount.component';
import { AMOUNT_DEFINITON_MOCK } from '../../testing/mocks';

commonInputTests(AmountComponent, 'forms/components/AmountComponent', AMOUNT_DEFINITON_MOCK);
