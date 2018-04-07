import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventChain } from '@app/modules/blockchain';

@Injectable()
export class BlockchainRepository {
  constructor(private http: HttpClient) {}

  post(chain: EventChain) {
    console.log('chain', chain);
    return this.http.post<EventChain>('/api/events/event-chains', chain);
  }
}
