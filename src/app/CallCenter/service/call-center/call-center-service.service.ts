import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic user1:123'
//   })
// };

// var headers_object = new HttpHeaders();
// headers_object.append('Content-Type', 'application/json');
// // headers_object.append("Authorization", "Basic " + btoa("user1:123"));
// const httpOptions = {
//   headers: headers_object
// };

@Injectable({
  providedIn: 'root'
})
export class CallCenterServiceService {

  private callCenterUrl = "http://testing2cms.herokuapp.com";  // URL to web api
  private httpOptions;

  constructor(private http: HttpClient) {

  }

  getListOfCallCenters(): any {
    console.log("> getListOfCallCenters");
    // var getListOfCallCentersUrl = this.callCenterUrl + "/getincidentlist";
    // console.log("Calling url: " + getListOfCallCentersUrl);
    // return this.http.get(getListOfCallCentersUrl);
  }

  getListOfIncidents(): any {
    console.log("> getListOfIncidents");
    var getListOfIncidentsUrl = this.callCenterUrl + "/incidents";
    console.log("Calling url: " + getListOfIncidentsUrl);
    return this.http.get(getListOfIncidentsUrl);
  }

  postIncident(incident): any {
    console.log("> postIncident");
    var postIncidentsUrl = this.callCenterUrl + "/incidents";
    console.log("Calling url: " + postIncidentsUrl);
    return this.http.post(postIncidentsUrl, incident);
  }

  getListOfWeathers(): any {
    console.log("> getListOfWeathers");
    var getListOfWeathersUrl = this.callCenterUrl + "/WEATHER";
    console.log("Calling url: " + getListOfWeathersUrl);
    return this.http.get(getListOfWeathersUrl);
  }

  getListOfPSI(): any {
    console.log("> getListOfPSI");
    var getListOfPSIUrl = this.callCenterUrl + "/PSI";
    console.log("Calling url: " + getListOfPSIUrl);
    return this.http.get(getListOfPSIUrl);
  }

  getDengueFile(): any {
    console.log("> getDengueFile");
    var getDengueFileUrl = this.callCenterUrl + "/DENGUE";
    console.log("Calling url: " + getDengueFileUrl);
    return this.http.get(getDengueFileUrl);
  }

  getTest(): any {
    return "Hello world!";
  }
}
