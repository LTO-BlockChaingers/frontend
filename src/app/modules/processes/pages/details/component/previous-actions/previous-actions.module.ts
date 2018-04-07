import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatListModule } from '@angular/material';

import { PreviousActionsComponent } from './previous-actions.component';

@NgModule({
  imports: [CommonModule, MatExpansionModule, MatListModule],
  declarations: [PreviousActionsComponent],
  exports: [PreviousActionsComponent]
})
export class PreviousActionsModule {}
