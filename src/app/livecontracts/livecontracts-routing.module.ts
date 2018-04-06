import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@modules/auth';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: 'app/modules/auth/pages/pages.module#PagesModule'
      },
      // Protected
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: 'app/modules/processes/pages/pages.module#PagesModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LivecontractsRoutingModule {}
