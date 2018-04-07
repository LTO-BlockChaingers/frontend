import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatDividerModule
} from '@angular/material';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent
      }
    ])
  ],
  declarations: [ListComponent]
})
export class ListModule {}
