import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScenarioSchema } from '../../../../models';

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
  @Input() scenarioId: string;
  @Input() state!: State; //
  @Input() actor!: any;
  @Output() action = new EventEmitter<any>();

  get instructions(): string {
    if (!this.state.instructions) {
      return '';
    }
    return this.state.instructions[this.actor] || '';
  }

  get defaultAction(): any {
    const action = this.state.actions.find(action => action.key === this.state.default_action);
    return action;
  }

  get actions(): any[] {
    return this.state.actions.filter(action => {
      return action.actor === this.actor && action.key !== this.defaultAction.key;
    });
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

  isUserAllowedToDo(action: any): boolean {
    return action.actor === this.actor;
  }

  tooltipMessage(action: any): string {
    return this.isUserAllowedToDo(action) ? '' : 'You are not allowed to perform this action';
  }
}
