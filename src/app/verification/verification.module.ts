import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './verification.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [VerificationComponent],
  bootstrap: [VerificationComponent]
})
export class VerificationModule { }
