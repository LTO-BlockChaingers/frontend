import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  process: any = {
    previous: []
  };

  actor: any = {};

  constructor() {}

  ngOnInit() {}
}
