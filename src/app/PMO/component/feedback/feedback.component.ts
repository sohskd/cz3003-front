import { Component, OnInit } from '@angular/core';
import { PmoService } from '../../service/pmo.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  // add this config
  settings;
  listOfFeedbackTable;

  show;
  constructor(
    private pmoService: PmoService) {

    this.settings = {
      columns: {
        reportid: {
          title: 'Report ID'
        },
        incidentid: {
          title: 'Incident ID'
        },
        title: {
          title: 'Title'
        },
        description: {
          title: 'Description'
        },
        handledby: {
          title: 'Handled By'
        },
        incidenttype: {
          title: 'Level'
        },
        casualitiesrescued: {
          title: 'Casualies Rescused'
        },
        timeclosed: {
          title: 'Time Closed'
        },
        handledin: {
          title: 'Duration Taken (Minutes)'
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
    this.pmoService.getListOfFeedback().subscribe(
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

        // Set the data
        this.listOfFeedbackTable = listOfIncidents;
        this.show = true;

      }
    );
  }
}
