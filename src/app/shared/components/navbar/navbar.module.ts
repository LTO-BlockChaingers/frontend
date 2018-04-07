import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NavbarService } from './navbar.service';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [NavbarService]
})
export class NavbarModule {}
