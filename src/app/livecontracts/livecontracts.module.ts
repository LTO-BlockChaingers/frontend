import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivecontractsComponent } from './livecontracts.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [LivecontractsComponent],
  bootstrap: [LivecontractsComponent]
})
export class LivecontractsModule { }
