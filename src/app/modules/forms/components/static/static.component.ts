import { Component, OnInit, Input } from '@angular/core';
import { StaticDefinition } from '@models/forms';

@Component({
  selector: 'lt-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {
  @Input() definition!: StaticDefinition;

  constructor() {}

  ngOnInit() {}
}
