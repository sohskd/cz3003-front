import { Component, OnInit } from '@angular/core';
import { CallCenterServiceService } from '../../service/call-center/call-center-service.service';
import { ShareService } from '../../service/share/share.service';

@Component({
  selector: 'app-call-center-create-incident',
  templateUrl: './call-center-create-incident.component.html',
  styleUrls: ['./call-center-create-incident.component.css']
})
export class CallCenterCreateIncidentComponent implements OnInit {

  // {
  //         "assigned": "SCDF",
  //
  // 	"description": "Help",
  //
  // 	 "estimatedcasualties": 200,
  //
  // 	"status": "open",
  //
  // 	"longtitude": 109.685308,
  //
  // 	 "latitude": 1.343087,
  //
  // 	"incidenttype": "ALPHA"
  //     }

  location;
  model: any = {};
  successpost;

  listOfIncidentTypes: Array<any>;
  listOfAssigned: Array<any>;

  constructor(private callCenterServiceService: CallCenterServiceService,
    private shareService: ShareService) {
    this.listOfIncidentTypes = ['ALPHA', 'BETA', 'OMEGA'];
    this.listOfAssigned = ['SCDF', 'SP', 'SPF'];
    this.location = this.shareService.getLocation();
    this.successpost = false;
  }

  ngOnInit() {
    this.model.latitude = this.location.lat;
    this.model.longtitude = this.location.lng;
    this.model.incidenttype = this.listOfIncidentTypes[0];
    this.model.assigned = this.listOfAssigned[0];
    this.model.status = "open"
  }

  onSubmit() {
    console.log(this.model);
    this.callCenterServiceService.postIncident(this.model).subscribe(
      resp => {
        console.log("return post")
        this.successpost = true
      },
      err => {
        console.log(err)
      }
    )
  }
}
