import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { MatStepperModule, MatButtonModule, MatListModule } from '@angular/material';
import { FormsModule as LcFormsModule } from '@modules/forms';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatListModule,
    LcFormsModule,
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
