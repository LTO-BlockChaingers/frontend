import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule } from '@modules/waves';
import { NavbarModule } from '@modules/shared/components';
import { LivecontractsRoutingModule } from './livecontracts-routing.module';

import { LivecontractsComponent } from './livecontracts.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NavbarModule,
    WavesModule.forRoot(),
    LivecontractsRoutingModule
  ],
  declarations: [LivecontractsComponent],
  bootstrap: [LivecontractsComponent]
})
export class LivecontractsModule {}
