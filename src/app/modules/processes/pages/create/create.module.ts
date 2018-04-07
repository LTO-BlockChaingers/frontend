import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { MatStepperModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';
import { FormsModule as LcFormsModule } from '@modules/forms';
import { LiabilityCheckerComponent } from './component/liability-checker/liability-checker.component';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatListModule,
    LcFormsModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateComponent
      }
    ])
  ],
  declarations: [CreateComponent, LiabilityCheckerComponent]
})
export class CreateModule {}
