import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import {
  MatStepperModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FormsModule as LcFormsModule } from '@modules/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatStepperModule,
    MatButtonModule,
    MatListModule,
    LcFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
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
