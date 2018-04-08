import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NavbarService } from './navbar.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild([])
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [NavbarService]
})
export class NavbarModule {}
