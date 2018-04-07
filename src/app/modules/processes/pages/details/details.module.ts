import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailsComponent
      }
    ])
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {}
