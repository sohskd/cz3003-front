import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic user1:123'
//   })
// };

var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');
headers_object.append("Authorization", "Basic " + btoa("user1:123"));

const httpOptions = {
  headers: headers_object
};

@Injectable({
  providedIn: 'root'
})
export class CallCenterServiceService {

  private callCenterUrl = "http://testing2cms.herokuapp.com";  // URL to web api

  constructor(private http: HttpClient) { }

  getListOfCallCenters (): any {
    console.log("> getListOfCallCenters");
    // var getListOfCallCentersUrl = this.callCenterUrl + "/getincidentlist";
    // console.log("Calling url: " + getListOfCallCentersUrl);
    // return this.http.get(getListOfCallCentersUrl);
  }

  getListOfIncidents(): any {
    console.log("> getListOfIncidents");
    var getListOfIncidentsUrl = this.callCenterUrl + "/incidents";
    console.log("Calling url: " + getListOfIncidentsUrl);
    return this.http.get(getListOfIncidentsUrl, httpOptions);
  }

  postIncident(incident): any {
    console.log("> postIncident");
    var postIncidentsUrl = this.callCenterUrl + "/incidents";
    console.log("Calling url: " + postIncidentsUrl);
    return this.http.post(postIncidentsUrl, incident, httpOptions);
  }

  getTest(): any {
    return "Hello world!";
  }
}
