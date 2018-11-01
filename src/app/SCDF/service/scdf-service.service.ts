import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScdfServiceService {

  listOfIncidents;

  private scdfUrl = "http://testing2cms.herokuapp.com";  // URL to web api

  constructor(private http: HttpClient) { }

  getListOfIncidents(): any {
    console.log("> getListOfIncidents");
    var getListOfIncidentsUrl = this.scdfUrl + "/incidents";
    console.log("Calling url: " + getListOfIncidentsUrl);
    return this.http.get(getListOfIncidentsUrl);
  }

  putIncident(inc): any {
    console.log("> putIncident(inc)");
    var putIncidentUrl = this.scdfUrl + "/incidents";
    console.log("Calling url: " + putIncidentUrl);
    return this.http.put(putIncidentUrl, inc);
  }

  postFeedback(inc): any {
    console.log("> postFeedback(inc)");
    var postFeedbackUrl = this.scdfUrl + "/feedback";
    console.log("Calling url: " + postFeedbackUrl);
    return this.http.post(postFeedbackUrl, inc);
  }
}
