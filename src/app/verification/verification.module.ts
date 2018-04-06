import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule } from '@modules/waves';

import { VerificationComponent } from './verification.component';

@NgModule({
  imports: [BrowserModule, CommonModule, WavesModule.forRoot()],
  declarations: [VerificationComponent],
  bootstrap: [VerificationComponent]
})
export class VerificationModule {}
