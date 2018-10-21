import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PmoComponent } from './pmo.component';
import { PmoMainComponent } from './component/pmo-main/pmo-main.component';
import { PmoReportComponent } from './component/pmo-report/pmo-report.component';

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
        path: 'report',
        component: PmoReportComponent,
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
