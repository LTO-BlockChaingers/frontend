import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lc-next-states',
  templateUrl: './next-states.component.html',
  styleUrls: ['./next-states.component.scss']
})
export class NextStatesComponent implements OnInit {
  @Input() states!: any[];
  @Input() actor!: any;

  constructor() {}

  ngOnInit() {
    if (!this.states) {
      throw 'NextStatesComponent: [states] required!';
    }
  }
}
