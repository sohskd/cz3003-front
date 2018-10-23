import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic user1:123'
  })
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
    return this.http.get(getListOfIncidentsUrl);
  }

  getTest(): any {
    return "Hello world!";
  }
}
