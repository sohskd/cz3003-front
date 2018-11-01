import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../../../utility/geocode/geocode.service';
import { ChangeDetectorRef } from '@angular/core';
import { ShareService } from '../../../CallCenter/service/share/share.service';
import { SpService } from '../../service/sp.service';

@Component({
  selector: 'app-spmain',
  templateUrl: './spmain.component.html',
  styleUrls: ['./spmain.component.css']
})
export class SPMainComponent implements OnInit {


  /*
   Map Data
  */
  currentOrientation = 'horizontal';
  title: string = 'World Map';

  markerlat: number;
  markerlng: number;
  myMarkerLabel: string;

  address: string;
  location: { latitude: number, longitude: number };
  loading: boolean;

  listOfIncidents: Array<any>;
  listOfStatus: Array<any>;

  statusSuccess: boolean;
  loaderBool: boolean;
  error: boolean;
  check: boolean;

  model: any = {};

  constructor(private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private shareService: ShareService,
    private spService: SpService) {

    // Initial Marker
    this.markerlat = 1.3483;
    this.markerlng = 103.6831;
    this.currentOrientation = 'horizontal';
    // this.address = shareService.getAddress();
    this.listOfStatus = ["Open", "Pending"];
    this.statusSuccess = false;
    this.loaderBool = false;
    this.error = false;
    this.check = false;
  }

  ngOnInit() {
    console.log("> CallCenterMainComponent")
    // this.showLocation();
    this.getListOfIncidents();
  }

  getListOfIncidents() {
    console.log("> getListOfIncidents()");
    this.spService.getListOfIncidents().subscribe(
      resp => {
        this.listOfIncidents = resp;
      }, err => {
        console.log(err);
      }, complete => {
        // Filter incidents
        this.listOfIncidents = this.listOfIncidents.filter(function(inc) {
          return inc.assigned.toLowerCase() == "sp" && inc.status != "Closed";
        });

        // Add attributes
        this.listOfIncidents.forEach(function(inc) {
          inc.radius = 500;
          inc.fillColor = inc.incidenttype == "ALPHA" ? "red"
            : inc.incidenttype == "BETA" ? "yellow"
              : "green";
          inc.fillOpacity = 0.80;
          inc.statusFirstStage = inc.status;
        });

        console.log(this.listOfIncidents);
      });
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
    this.statusSuccess = false;
    this.error = false;
    infoWindow.open();
  }

  onSubmit(inc) {
    console.log("onSubmit(inc)");
    console.log(inc);

    // Construct new model to send to backend
    var newInc;
    newInc = {
      "id": inc.incidentid,
      "status": inc.status
    }
    console.log(newInc);
    this.loaderBool = true;
    this.spService.putIncident(newInc).subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        console.log(err);
        this.loaderBool = false;
        this.error = true;
      },
      complete => {
        console.log("complete");
        this.statusSuccess = true;
        this.loaderBool = false;
      }
    )
  }

  onSubmitResolve(inc) {
    console.log(inc)

    // Construct new object to feedback to backend
    /*
    {
      "casualitiesrescued": "100",
      "incidentid": "12",
      "handledby": "SPF",
      "title": "ORD",
      "description": "blbb"
    }
    */

    var feedback = {
      "casualitiesrescued": inc.casualties,
      "incidentid": inc.incidentid,
      "handledby": inc.assigned,
      "title": inc.title,
      "description": inc.description
    }

    this.loaderBool = true;
    this.spService.postFeedback(feedback).subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        console.log(err);
        this.loaderBool = false;
        this.error = true;
      },
      complete => {
        console.log("complete");
        this.statusSuccess = true;
        this.loaderBool = false;
      }
    )
  }
}
