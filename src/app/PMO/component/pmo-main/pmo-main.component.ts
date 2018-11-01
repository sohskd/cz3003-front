import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../../../utility/geocode/geocode.service';
import { ChangeDetectorRef } from '@angular/core';
import { ShareService } from '../../../CallCenter/service/share/share.service';
import { CallCenterServiceService } from '../../../CallCenter/service/call-center/call-center-service.service';
import { ScdfServiceService } from '../../../SCDF/service/scdf-service.service';
import { SpfService } from '../../../spf/service/spf.service';
import { SpService } from '../../../sp/service/sp.service';
// import * as jsPDF from 'jspdf';

@Component({
  selector: 'pmo-main',
  templateUrl: './pmo-main.component.html',
  styleUrls: ['./pmo-main.component.css']
})
export class PmoMainComponent implements OnInit {

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

  address: string;
  location: { latitude: number, longitude: number };
  loading: boolean;

  selectedCircle: any = {};
  selectedPSI: any = {};

  listOfIncidents: Array<any>;
  listOfStatus: Array<any>;

  listOfSPFIncidents: Array<any>;
  listOfSPIncidents: Array<any>;

  statusSuccess: boolean;
  loaderBool: boolean;
  error: boolean;

  constructor(private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private shareService: ShareService,
    private callCenterServiceService: CallCenterServiceService,
    private scdfService: ScdfServiceService,
    private spfService: SpfService,
    private spService: SpService) {

    // Initial Marker
    this.markerlat = 1.3483;
    this.markerlng = 103.6831;
    this.currentOrientation = 'horizontal';

    this.address = shareService.getAddress();

    // this.address = shareService.getAddress();
    this.listOfStatus = ["Open", "Pending"];
    this.statusSuccess = false;
    this.loaderBool = false;
    this.error = false;
  }

  ngOnInit() {
    console.log("> CallCenterMainComponent")
    this.showLocation();
    this.getWeather();
    this.getPSI();
    this.getListOfIncidents();
    this.getListOFSpfIncidents();
    this.getListOFSpIncidents();
    // this.callCenterServiceService.getListOfWeathers();
  }

  getListOFSpIncidents() {
    console.log("> getListOFSpIncidents()");
    this.spService.getListOfIncidents().subscribe(
      resp => {
        this.listOfSPIncidents = resp;
      }, err => {
        console.log(err);
      }, complete => {
        // Filter incidents
        this.listOfSPIncidents = this.listOfSPIncidents.filter(function(inc) {
          return inc.assigned.toLowerCase() == "sp" && inc.status != "Closed";
        });

        // Add attributes
        this.listOfSPIncidents.forEach(function(inc) {
          inc.radius = 500;
          inc.fillColor = inc.incidenttype == "ALPHA" ? "red"
            : inc.incidenttype == "BETA" ? "yellow"
              : "green";
          inc.fillOpacity = 0.80;
        });

        console.log(this.listOfSPIncidents);
      });
  }

  getListOFSpfIncidents() {
    console.log("> getListOFSpfIncidents()");
    this.spfService.getListOfIncidents().subscribe(
      resp => {
        this.listOfSPFIncidents = resp;
      }, err => {
        console.log(err);
      }, complete => {
        // Filter incidents
        this.listOfSPFIncidents = this.listOfSPFIncidents.filter(function(inc) {
          return inc.assigned.toLowerCase() == "spf" && inc.status != "Closed";
        });

        // Add attributes
        this.listOfSPFIncidents.forEach(function(inc) {
          inc.radius = 500;
          inc.fillColor = inc.incidenttype == "ALPHA" ? "red"
            : inc.incidenttype == "BETA" ? "yellow"
              : "green";
          inc.fillOpacity = 0.80;
        });

        console.log(this.listOfSPFIncidents);
      });
  }

  getListOfIncidents() {
    console.log("> getListOfIncidents()");
    this.scdfService.getListOfIncidents().subscribe(
      resp => {
        this.listOfIncidents = resp;
      }, err => {
        console.log(err);
      }, complete => {
        // Filter incidents
        this.listOfIncidents = this.listOfIncidents.filter(function(inc) {
          return inc.assigned.toLowerCase() == "scdf" && inc.status != "Closed";
        });

        // Add attributes
        this.listOfIncidents.forEach(function(inc) {
          inc.radius = 500;
          inc.fillColor = inc.incidenttype == "ALPHA" ? "red"
            : inc.incidenttype == "BETA" ? "yellow"
              : "green";
          inc.fillOpacity = 0.80;
        });

        console.log(this.listOfIncidents);
      });
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

    infoWindow.open();
  }
}
