import { NgModule, ModuleWithProviders } from '@angular/core';

import { BlockchainRepository } from './blockchain.repository';

@NgModule({})
export class BlockchainModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BlockchainModule,
      providers: [BlockchainRepository]
    };
  }
}
