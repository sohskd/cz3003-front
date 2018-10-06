import { Component, OnInit } from '@angular/core';
import { CallCenterServiceService } from 'src/app/CallCenter/service/call-center/call-center-service.service';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-call-center-main',
  templateUrl: './call-center-main.component.html',
  styleUrls: ['./call-center-main.component.css']
})
export class CallCenterMainComponent implements OnInit {


  // listOfIncidents;
  //
  // constructor(private callCenterServiceService: CallCenterServiceService) { }
  //
  // ngOnInit() {
  //   console.log("ngOnInit CallCenterMainComponent")
  //   this.getIncidentList();
  // }
  //
  // getIncidentList(): void {
  //
  //   this.listOfIncidents = this.callCenterServiceService.getListOfCallCenters()
  //   .subscribe(listOfIncidentsObj => this.listOfIncidents = listOfIncidentsObj)
  //
  //   // console.log("Successful return: " + this.listOfIncidents.name);
  // }

  // currentOrientation = 'horizontal';
  //
  // title: string = 'My first AGM project';
  // lat: number = 1.3483;
  // lng: number = 103.6831;
  // myMarker = "Desmond Marker";
  //
  // constructor() { }
  //
  // ngOnInit() {
  //   console.log("> ngOnInit CallCenterComponent")
  // }


   /*
    Map Data
   */
  currentOrientation = 'horizontal';
  title: string = 'World Map';
  lat: number = 1.3483;
  lng: number = 103.6831;
  myMarker = "Desmond Marker";
  circle: any;

  constructor() {
    // this.lat = 51.678418;
    // this.lng = 7.809007;
    this.circle = [
      { lat: this.lat, lng: this.lng, radius: 2000, color: 'red' },
      { lat: this.lat + 0.1, lng: this.lng + 0.1, radius: 2000, color: 'green' },
      // { lat: 54.79, lng: 10.8, radius: 60000, color: 'yellow' },
      // { lat: 51.79, lng: 8.8, radius: 60000, color: 'yellow' },
      // { lat: 60.79, lng: 7.8, radius: 60000, color: 'green' },
    ];
    this.currentOrientation = 'horizontal';
  }

  ngOnInit() {
    console.log("> ngOnInit CallCenterComponent")
  }

  onCircleClick(data) {
    console.log("> onClick")
    console.log(data)
  }  
}
