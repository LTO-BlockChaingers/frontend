import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WavesService } from './waves.service';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class WavesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WavesModule,
      providers: [WavesService]
    };
  }
}
