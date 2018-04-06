import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule } from '@modules/waves';

import { LivecontractsComponent } from './livecontracts.component';

@NgModule({
  imports: [BrowserModule, CommonModule, WavesModule.forRoot()],
  declarations: [LivecontractsComponent],
  bootstrap: [LivecontractsComponent]
})
export class LivecontractsModule {}
