import { Component, OnInit } from '@angular/core';
import { SpService } from '../../service/sp.service';

@Component({
  selector: 'app-spincident',
  templateUrl: './spincident.component.html',
  styleUrls: ['./spincident.component.css']
})
export class SPIncidentComponent implements OnInit {

  // add this config
  settings;
  listOfIncidentsTable;

  show;
  constructor(private spService: SpService) {
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
        status: {
          title: 'Status'
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

  getListOfIncidents() {
    var listOfIncidents;
    this.spService.getListOfIncidents().subscribe(
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

        // Filter incidents
        listOfIncidents = listOfIncidents.filter(function(inc) {
          return inc.assigned.toLowerCase() == "sp";
        });

        // Set the data
        this.listOfIncidentsTable = listOfIncidents;
        this.show = true;
      }
    );
  }
}
