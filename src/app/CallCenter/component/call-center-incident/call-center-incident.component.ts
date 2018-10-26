import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallCenterServiceService } from '../../service/call-center/call-center-service.service';

@Component({
  selector: 'app-call-center-incident',
  templateUrl: './call-center-incident.component.html',
  styleUrls: ['./call-center-incident.component.css']
})
export class CallCenterIncidentComponent implements OnInit {

  // add this config
  settings;
  listOfIncidentsTable;

  show;
  constructor(private router: Router,
    private callCenterServiceService: CallCenterServiceService) {
    this.settings = {
      columns: {
        incidentid: {
          title: 'Incident ID'
        },
        incidenttype: {
          title: 'Incident Type'
        },
        description: {
          title: 'Description'
        },
        datetimereported: {
          title: 'Date Reported'
        },
        datetimeresolved: {
          title: 'Date Resolved'
        },
        assigned: {
          title: 'Assigned'
        }
      }
    };

    this.show = false;
  }

  ngOnInit() {
    console.log("> CallCenterIncidentComponent ngOnInit()")
    this.getListOfIncidents();
  }

  onSubmit() {
    console.log("> CallCenterIncidentComponent onSubmit()")
    console.log(this.router.url)
    this.router.navigate(['./create']);
  }

  getListOfIncidents() {
    var listOfIncidents;
    this.callCenterServiceService.getListOfIncidents().subscribe(
      resp => {
        console.log("> resp");
        listOfIncidents = resp;
      },
      err => {
        console.log("> err");
        console.log(err);
      },
      complete => {
        console.log("> complete");
        console.log(listOfIncidents);

        // Set the columns

        /*
        assigned: "SPF"
datetimereported: "2018-10-25T03:37:42.000+0000"
datetimeresolved: "2018-10-25T03:43:12.000+0000"
description: "Help"
estimatedcasualties: 200
incidentid: 1
incidenttype: "ALPHA"
lastupdated: "2018-10-25T03:43:12.000+0000"
latitude: 1.3430869579315186
longtitude: 109.68531036376953
status: "Closed"
        */



        // Set the data
        this.listOfIncidentsTable = listOfIncidents;
        this.show = true;

      }
    );
  }
}
