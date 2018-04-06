import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'create',
            loadChildren: './create/create.module#CreateModule'
          },
          {
            path: '',
            loadChildren: './list/list.module#ListModule'
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class PagesModule {}
