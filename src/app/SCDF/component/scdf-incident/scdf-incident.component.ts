import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScdfServiceService } from '../../service/scdf-service.service';

@Component({
  selector: 'app-scdf-incident',
  templateUrl: './scdf-incident.component.html',
  styleUrls: ['./scdf-incident.component.css']
})
export class ScdfIncidentComponent implements OnInit {

  // add this config
  settings;
  listOfIncidentsTable;

  show;
  constructor(private router: Router,
    private scdfService: ScdfServiceService) {
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

  onSubmit() {
    console.log("> CallCenterIncidentComponent onSubmit()")
    console.log(this.router.url)
    this.router.navigate(['./create']);
  }

  getListOfIncidents() {
    var listOfIncidents;
    this.scdfService.getListOfIncidents().subscribe(
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
          return inc.assigned.toLowerCase() == "scdf";
        });

        // Set the data
        this.listOfIncidentsTable = listOfIncidents;
        this.show = true;
      }
    );
  }
}
