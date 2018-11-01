import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CallCenterServiceService } from 'src/app/CallCenter/service/call-center/call-center-service.service';
import { google } from '@agm/core/services/google-maps-types';
import { ShareService } from '../../service/share/share.service';
import { GeocodeService } from '../../../utility/geocode/geocode.service';

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
  markerlat: number;
  markerlng: number;
  myMarkerLabel: string;

  weather: any;
  psi: any;
  psiList: any;
  dengue: any;

  address: string;
  location: { latitude: number, longitude: number };
  loading: boolean;

  selectedCircle: any = {};
  selectedPSI: any = {};

  constructor(private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private shareService: ShareService,
    private callCenterServiceService: CallCenterServiceService) {

    // Initial Marker
    this.markerlat = 1.3483;
    this.markerlng = 103.6831;
    this.currentOrientation = 'horizontal';

    this.address = shareService.getAddress();
  }

  ngOnInit() {
    console.log("> CallCenterMainComponent")
    this.showLocation();
    this.getWeather();
    this.getPSI();
    this.getDengue();
    // this.callCenterServiceService.getListOfWeathers();
  }

  getDengue() {
    this.callCenterServiceService.getDengueFile().subscribe(
      resp => {
        this.dengue = resp;
      },
      err => {
        console.log(err)
      },
      complete => {
        console.log("> complete getDengue")
        console.log(this.dengue);
      }
    )
  }

  getWeather() {
    this.callCenterServiceService.getListOfWeathers().subscribe(
      resp => {
        this.weather = resp;
      },
      err => {
        console.log(err)
      },
      complete => {
        console.log("> complete getWeather")
        this.weather.forEach(function(obj) {
          obj.radius = 500;
          obj.fillColor = 'blue';
          obj.fillOpacity = 0.80;
        });

        console.log(this.weather)
      }
    )
  }

  onWeatherClick(weather) {
    console.log("> onWeatherClick")
    this.selectedCircle = weather;
    console.log(weather)
  }

  getPSI() {
    this.callCenterServiceService.getListOfPSI().subscribe(
      resp => {
        this.psi = resp;
      },
      err => {
        console.log(err)
      },
      complete => {
        console.log("> complete getPSI");
        console.log(this.psi);
        this.psiList = Object.values(this.psi)
        this.psiList.forEach(function(obj) {
          obj.radius = Math.sqrt(obj.value) * 100;
          obj.fillColor = 'red';
          obj.fillOpacity = 0.80;
        });

        console.log(this.psiList);
      }
    )
  }

  onPSIClick(psi) {
    console.log("> onWeatherClick")
    this.selectedPSI = psi;
    console.log(psi)
  }

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.loading = true;
    this.geocodeService.geocodeAddress(this.address)
      .subscribe(
        location => {
          this.shareService.saveAddress(this.address)
          this.shareService.saveLocation(location)
          this.location = location;
          this.loading = false;

          // Set the marker lat & lng base on geocoding
          this.myMarkerLabel = this.shareService.getAddress();
          this.markerlat = location.lat;
          this.markerlng = location.lng;

          this.ref.detectChanges();
        }
      );
  }

  onMarkerClick(infoWindow, gm) {

    console.log(infoWindow)
    console.log(gm)

    // if (gm.lastOpen != null) {
    //   gm.lastOpen.close();
    // }
    //
    // gm.lastOpen = infoWindow;

    infoWindow.open();
  }
}
