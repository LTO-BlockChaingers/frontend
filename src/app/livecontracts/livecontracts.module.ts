import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WavesModule } from '@modules/waves';
import { ProcessesModule } from '@modules/processes';
import { NavbarModule } from '@modules/shared/components';
import { AuthModule } from '@modules/auth';

import { LivecontractsRoutingModule } from './livecontracts-routing.module';

import { LivecontractsComponent } from './livecontracts.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NavbarModule,
    HttpClientModule,
    AuthModule.forRoot(),
    WavesModule.forRoot(),
    ProcessesModule.forRoot(),
    LivecontractsRoutingModule
  ],
  declarations: [LivecontractsComponent],
  bootstrap: [LivecontractsComponent]
})
export class LivecontractsModule {}
