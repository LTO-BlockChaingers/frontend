import { commonInputTests } from '../../testing/common-input-tests.spec';
import { MoneyComponent } from './money.component';
import { MONEY_DEFINITION_MOCK } from '../../testing/mocks';

commonInputTests(MoneyComponent, 'forms/components/MoneyComponent', MONEY_DEFINITION_MOCK);
