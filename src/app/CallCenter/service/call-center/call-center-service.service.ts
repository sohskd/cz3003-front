import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CallCenterServiceService {

  private callCenterUrl = "http://localhost:8080/api/callcenter";  // URL to web api

  constructor(private http: HttpClient) { }

  getListOfCallCenters (): any {
    console.log("> getListOfCallCenters");
    var getListOfCallCentersUrl = this.callCenterUrl + "/getincidentlist";
    console.log("Calling url: " + getListOfCallCentersUrl);
    return this.http.get(getListOfCallCentersUrl);
  }
}
