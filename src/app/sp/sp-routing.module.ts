import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SPComponent } from './sp.component';
import { SPMainComponent } from './component/spmain/spmain.component';
import { SPIncidentComponent } from './component/spincident/spincident.component';

const spRoutes: Routes = [
  {
    path: 'sp',
    component: SPComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: SPMainComponent,
      },
      {
        path: 'incident',
        component: SPIncidentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(spRoutes),
  ],
  exports:[RouterModule]
})
export class SPRoutingModule { }
