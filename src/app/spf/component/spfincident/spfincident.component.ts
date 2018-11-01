import { Component, OnInit } from '@angular/core';
import { SpfService } from '../../service/spf.service';

@Component({
  selector: 'app-spfincident',
  templateUrl: './spfincident.component.html',
  styleUrls: ['./spfincident.component.css']
})
export class SPFIncidentComponent implements OnInit {

  // add this config
  settings;
  listOfIncidentsTable;

  show;
  constructor(private spfService: SpfService) {
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
    this.spfService.getListOfIncidents().subscribe(
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
          return inc.assigned.toLowerCase() == "spf";
        });

        // Set the data
        this.listOfIncidentsTable = listOfIncidents;
        this.show = true;
      }
    );
  }
}
