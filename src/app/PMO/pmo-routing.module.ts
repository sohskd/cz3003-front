import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PmoComponent } from './pmo.component';
import { PmoMainComponent } from './component/pmo-main/pmo-main.component';
import { PmoReportComponent } from './component/pmo-report/pmo-report.component';
import { FeedbackComponent } from './component/feedback/feedback.component';

const pmoRoutes: Routes = [
  {
    path: 'pmo',
    component: PmoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: PmoMainComponent,
      },
      {
        path: 'bombshelter',
        component: PmoReportComponent,
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(pmoRoutes),
  ],
  exports:[RouterModule]
})
export class PmoRoutingModule { }
