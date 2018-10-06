import { Component, OnInit } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-call-center',
  templateUrl: './call-center.component.html',
  styleUrls: ['./call-center.component.css']
})
export class CallCenterComponent implements OnInit {

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

  currentOrientation = 'horizontal';

  title: string = 'My first AGM project';
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
  }

  ngOnInit() {
    console.log("> ngOnInit CallCenterComponent")
  }

  onCircleClick(data) {

    console.log("> onClick")
    console.log(data)
  }
}
