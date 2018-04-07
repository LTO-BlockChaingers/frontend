import { Injectable } from '@angular/core';
import * as Waves from 'wavesplatform'

@Injectable()
export class WavesService {
  constructor() { }
  //sets data to account, 
  setData(seed: string, key: string, value: boolean | number | string): Promise<string> {
    return Waves.setData(seed, key, value)
  }
  getData(seed: string, key?: string): Promise<Waves.IDataEntry[]> {
    return Waves.getData(seed, key)
  }
}
