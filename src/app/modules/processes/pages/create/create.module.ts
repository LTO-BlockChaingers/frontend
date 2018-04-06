import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
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
