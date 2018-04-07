import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Take properties from schema
 */
interface State {
  title: string;
  due_date: string;
  description: string;
  instructions: any;

  [key: string]: any;
}

@Component({
  selector: 'lc-current-state',
  templateUrl: './current-state.component.html',
  styleUrls: ['./current-state.component.scss']
})
export class CurrentStateComponent implements OnInit {
  @Input() state!: State; //
  @Input() actor!: string;
  @Output() action = new EventEmitter<any>();

  get instructions(): string {
    if (!this.state.instructions) {
      return '';
    }
    return this.state.instructions[this.actor] || '';
  }

  get defaultAction(): any {
    return this.state.default_action.actor.includes(this.actor) ? this.state.default_action : null;
  }

  get actions(): any[] {
    return this.state.actions.filter(action => action.actor.includes(this.actor));
  }

  constructor() {}

  ngOnInit() {
    if (!this.state) {
      throw 'CurrentStateComponent: [state] is required!';
    }
    if (!this.actor) {
      throw 'CurrentStateComponent: [actor] is required!';
    }
  }

  emitAction(action: any) {
    this.action.next(action);
  }
}
