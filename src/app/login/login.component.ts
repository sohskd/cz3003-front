import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

    }

  ngOnInit() {
    // this.router.navigate(['/callcenter']);

// UNCOMMENT THIS
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    console.log(this.loginForm.value.username)
    if(this.loginForm.value.username == "callcenter") {
      this.router.navigate(['/callcenter']);
    } else if (this.loginForm.value.username == "pmo") {
      console.log("route to pmo")
      this.router.navigate(['/pmo']);
    } else if (this.loginForm.value.username == "scdf") {
      console.log("route to scdf")
      this.router.navigate(['/scdf']);
    } else if (this.loginForm.value.username == "spf") {
      console.log("route to spf")
      this.router.navigate(['/spf']);
    } else if (this.loginForm.value.username == "sp") {
      console.log("route to sp")
      this.router.navigate(['/sp']);
    }
  }
}
