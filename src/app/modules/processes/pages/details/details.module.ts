import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';

import { PreviousActionsModule } from './component/previous-actions/previous-actions.module';
import { CurrentStateModule } from './component/current-state/current-state.module';

@NgModule({
  imports: [
    CommonModule,
    PreviousActionsModule,
    CurrentStateModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailsComponent
      }
    ])
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {}
