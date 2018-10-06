import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-center-incident',
  templateUrl: './call-center-incident.component.html',
  styleUrls: ['./call-center-incident.component.css']
})
export class CallCenterIncidentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("> CallCenterIncidentComponent onSubmit()")
    console.log(this.router.url)
    this.router.navigate(['./create']);
  }
}
