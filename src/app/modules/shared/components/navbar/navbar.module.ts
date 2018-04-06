import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material';

import { NavbarTitleDirective } from './navbar-title.directive';
import { NavbarContentDirective } from './navbar-content.directive';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [NavbarComponent, NavbarContentDirective, NavbarTitleDirective],
  exports: [NavbarComponent, NavbarContentDirective, NavbarTitleDirective]
})
export class NavbarModule {}
