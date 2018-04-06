import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule } from '@modules/waves';
import { NavbarModule } from '@modules/shared/components';
import { VerificationRoutingModule } from './verification-routing.module';

import { VerificationComponent } from './verification.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    CommonModule,
    WavesModule.forRoot(),
    VerificationRoutingModule
  ],
  declarations: [VerificationComponent],
  bootstrap: [VerificationComponent]
})
export class VerificationModule {}
