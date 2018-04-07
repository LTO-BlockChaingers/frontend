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
            path: 'details/:id',
            loadChildren: './details/details.module#DetailsModule'
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
