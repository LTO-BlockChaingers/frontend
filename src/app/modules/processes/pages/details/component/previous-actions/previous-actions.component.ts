import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lc-previous-actions',
  templateUrl: './previous-actions.component.html',
  styleUrls: ['./previous-actions.component.scss']
})
export class PreviousActionsComponent implements OnInit {
  @Input() actions!: any[];
  @Input() actor!: any;

  constructor() {}

  ngOnInit() {
    if (!this.actions) {
      throw 'PreviousActionsComponent: [actions] array is required!';
    }
  }
}
