import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentStateComponent } from './current-state.component';
import { MatCardModule, MatDividerModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
  declarations: [CurrentStateComponent],
  exports: [CurrentStateComponent]
})
export class CurrentStateModule {}
