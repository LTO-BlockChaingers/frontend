import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  process: any = {
    previous: [],
    next: []
  };

  actor: any = {};

  constructor() {}

  ngOnInit() {}

  actionHandler(action: any) {
    console.log(action);
  }
}
