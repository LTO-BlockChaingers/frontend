import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { MatStepperModule, MatButtonModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateComponent
      }
    ])
  ],
  declarations: [CreateComponent]
})
export class CreateModule {}
