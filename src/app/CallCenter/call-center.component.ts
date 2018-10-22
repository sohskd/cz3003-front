import { Component, OnInit } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-call-center',
  templateUrl: './call-center.component.html',
  styleUrls: ['./call-center.component.css']
})
export class CallCenterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log("> CallCenterComponent")
  }
}
