import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PmoService {

  private pmoUrl = "http://testing2cms.herokuapp.com";  // URL to web api

  constructor(private http: HttpClient) { }

  getlistOfBombshelter(): any {
    console.log("> getlistOfBombshelter");
    var getlistOfBombshelterUrl = this.pmoUrl + "/BOMBSHELTER";
    console.log("Calling url: " + getlistOfBombshelterUrl);
    return this.http.get(getlistOfBombshelterUrl);
  }

  getListOfFeedback(): any {
    console.log("> getListOfFeedback");
    var getlistOfFeedbackUrl = this.pmoUrl + "/feedback";
    console.log("Calling url: " + getlistOfFeedbackUrl);
    return this.http.get(getlistOfFeedbackUrl);
  }
}
