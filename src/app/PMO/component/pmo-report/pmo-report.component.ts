import { Component, OnInit } from '@angular/core';
import { PmoService } from '../../service/pmo.service';

@Component({
  selector: 'pmo-report',
  templateUrl: './pmo-report.component.html',
  styleUrls: ['./pmo-report.component.css']
})
export class PmoReportComponent implements OnInit {

  listOfBombshelter: Array<any>;
  show;
  settings;

  constructor(private pmoService: PmoService) {
    this.settings = {
      columns: {
        description: {
          title: 'Bombshelter'
        },
        postalcode: {
          title: 'Postal Code'
        }
      }
    };

    this.show = false;
  }

  ngOnInit() {
    this.getlistOfBombshelter();
  }

  getlistOfBombshelter() {
    this.pmoService.getlistOfBombshelter().subscribe(
      resp => {
        this.listOfBombshelter = resp;
      }, err => {
        console.log(err);
      }, complete => {
        console.log(this.listOfBombshelter);
        this.show = true;
      });
  }
}
