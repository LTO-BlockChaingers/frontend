import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { take } from 'rxjs/operators';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface SertificateValidity {
  valid: boolean;
  address: string;
}

@Component({
  selector: 'app-liability-checker',
  templateUrl: './liability-checker.component.html',
  styleUrls: ['./liability-checker.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        query(':leave', [stagger(100, [animate('0.5s', style({ opacity: 0 }))])], {
          optional: true
        }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [animate('0.5s', style({ opacity: 1 }))])
        ])
      ])
    ])
  ]
})
export class LiabilityCheckerComponent implements OnInit {
  /**
   * Waves address to check
   */
  @Input() address: string;

  private certificateChain$: ReplaySubject<SertificateValidity[]> = new ReplaySubject();
  private items: SertificateValidity[] = [];

  constructor() {
    this.items = [
      {
        valid: true,
        address: 'adasdasdsad'
      },
      {
        valid: true,
        address: 'kkjdkfgjkdjfgfg'
      }
    ];
    this.certificateChain$.next(this.items);
  }

  ngOnInit() {}
}
