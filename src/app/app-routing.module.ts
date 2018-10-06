import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PmoComponent } from 'src/app/PMO/pmo.component';
import { LoginComponent } from 'src/app/login/login.component';
// import { CallCenterComponent } from 'src/app/CallCenter/call-center.component';

const routes: Routes = [
  // { path: 'pmomain', component: PmoComponent },
  // { path: 'callcentermain', component: CallCenterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
