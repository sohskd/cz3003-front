import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-center-incident',
  templateUrl: './call-center-incident.component.html',
  styleUrls: ['./call-center-incident.component.css']
})
export class CallCenterIncidentComponent implements OnInit {

  // add this config
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      city: {
        title: 'City'
      },
      employeeId: {
        title: 'Employee No.'
      }
    }
  };

  employees = [
    {
      "id": 1,
      "name": "Jason Bourne",
      "employeeId": "us2323",
      "city": "New York"
    },
    {
      "id": 2,
      "name": "Mary",
      "employeeId": "us6432",
      "city": "San Jose"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    console.log("> CallCenterIncidentComponent onSubmit()")
    console.log(this.router.url)
    this.router.navigate(['./create']);
  }
}
