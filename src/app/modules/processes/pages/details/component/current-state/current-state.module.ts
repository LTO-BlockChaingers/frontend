import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentStateComponent } from './current-state.component';
import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatCardModule, MatDividerModule, MatTooltipModule, MatButtonModule],
  declarations: [CurrentStateComponent],
  exports: [CurrentStateComponent]
})
export class CurrentStateModule {}
