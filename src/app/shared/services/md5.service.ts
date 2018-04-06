import { Injectable } from '@angular/core';
import * as md5 from 'md5';

@Injectable()
export class Md5Service {
  constructor() {}

  hash(message: string): string {
    return md5(message);
  }
}
