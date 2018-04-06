import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventChain } from '@app/modules/blockchain';

@Injectable()
export class BlockchainRepository {
  constructor(private http: HttpClient) {}

  async post(chain: EventChain) {
    throw '[blockchain] BlockchainRepository->post Not implemented!';
  }
}
