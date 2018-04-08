import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventChain } from '@app/modules/blockchain/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlockchainRepository {
  constructor(private http: HttpClient) {}

  post(chain: EventChain) {
    console.log('chain', chain);
    return this.http.post<EventChain>(
      'http://blockchaingers.legalthings.io/api/events/event-chains',
      chain
    );
  }

  list() {
    return (
      this.http
        .get<any[]>('http://blockchaingers.legalthings.io/api/events/event-chains')
        // .get<any[]>('/assets/mocks/chains.json')
        .pipe(map(chainsData => chainsData.map(chainData => EventChain.fromJSON(chainData))))
    );
  }

  getChainWithResource(resourceId: string): Observable<EventChain> {
    return this.list().pipe(
      map(chains =>
        chains.find(chain => {
          const resource = chain.resources.find(r => r.indexOf(resourceId) !== -1);
          return !!resource;
        })
      )
    );
  }
}
