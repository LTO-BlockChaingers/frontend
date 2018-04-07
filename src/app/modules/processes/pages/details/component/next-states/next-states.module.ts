import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

import { NextStatesComponent } from './next-states.component';

@NgModule({
  imports: [CommonModule, MatExpansionModule],
  declarations: [NextStatesComponent],
  exports: [NextStatesComponent]
})
export class NextStatesModule {}
