import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpfService {

  listOfIncidents;

  private spUrl = "http://testing2cms.herokuapp.com";  // URL to web api

  constructor(private http: HttpClient) { }

  getListOfIncidents(): any {
    console.log("> getListOfIncidents");
    var getListOfIncidentsUrl = this.spUrl + "/incidents";
    console.log("Calling url: " + getListOfIncidentsUrl);
    return this.http.get(getListOfIncidentsUrl);
  }

  putIncident(inc): any {
    console.log("> putIncident(inc)");
    var putIncidentUrl = this.spUrl + "/incidents";
    console.log("Calling url: " + putIncidentUrl);
    return this.http.put(putIncidentUrl, inc);
  }

  postFeedback(inc): any {
    console.log("> postFeedback(inc)");
    var postFeedbackUrl = this.spUrl + "/feedback";
    console.log("Calling url: " + postFeedbackUrl);
    return this.http.post(postFeedbackUrl, inc);
  }
}
