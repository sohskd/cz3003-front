import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScdfComponent } from 'src/app/SCDF/scdf.component';
import { ScdfMainComponent } from './component/scdf-main/scdf-main.component';
import { ScdfIncidentComponent } from './component/scdf-incident/scdf-incident.component';

const scdfRoutes: Routes = [
  {
    path: 'scdf',
    component: ScdfComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: ScdfMainComponent,
      },
      {
        path: 'incident',
        component: ScdfIncidentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(scdfRoutes),
  ],
  exports:[RouterModule]
})
export class ScdfRoutingModule { }

// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes),
//   ],
//   declarations: []
// })
// export class CallCenterRoutingModule { }
