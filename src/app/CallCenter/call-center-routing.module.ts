import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CallCenterMainComponent } from './component/call-center-main/call-center-main.component';
import { CallCenterComponent } from 'src/app/CallCenter/call-center.component';
import { CallCenterIncidentComponent } from 'src/app/CallCenter/component/call-center-incident/call-center-incident.component';
import { CallCenterCreateIncidentComponent } from 'src/app/CallCenter/component/call-center-create-incident/call-center-create-incident.component';

const callCenterRoutes: Routes = [
  {
    path: 'callcenter',
    component: CallCenterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: CallCenterMainComponent,
      },
      {
        path: 'incident',
        component: CallCenterIncidentComponent,
      },
      {
        path: 'create',
        component: CallCenterCreateIncidentComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(callCenterRoutes),
  ],
  exports:[RouterModule]
})
export class CallCenterRoutingModule { }
