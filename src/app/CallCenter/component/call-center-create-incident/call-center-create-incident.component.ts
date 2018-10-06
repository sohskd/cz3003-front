import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-center-create-incident',
  templateUrl: './call-center-create-incident.component.html',
  styleUrls: ['./call-center-create-incident.component.css']
})
export class CallCenterCreateIncidentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model: any = {};

  onSubmit() {
    console.log(this.model)
  }
}
