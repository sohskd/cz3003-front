import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-center-create-incident',
  templateUrl: './call-center-create-incident.component.html',
  styleUrls: ['./call-center-create-incident.component.css']
})
export class CallCenterCreateIncidentComponent implements OnInit {

  // {
  //         "assigned": "SPF",
  //         "description": "Help",
  //         "estimatedcasualties": 200,
  //         "status": "open",
  //         "longtitude": 109.685308,
  //         "latitude": 1.343087,
  //         "incidenttype": "ALPHA"
  //     }

  constructor() { }

  ngOnInit() {
  }

  model: any = {};

  onSubmit() {
    console.log(this.model)
  }
}
