import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Desmond\'s App';

  constructor(private router: Router) {};

  ngOnInit() {
    console.log("ngOnInit AppComponent")
    this.login();
  }

  login() {
    this.router.navigate(['/login']);
  }


}
