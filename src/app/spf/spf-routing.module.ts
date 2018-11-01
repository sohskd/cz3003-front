import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SPFMainComponent } from './component/spfmain/spfmain.component';
import { SPFComponent } from './spf.component';
import { SPFIncidentComponent } from './component/spfincident/spfincident.component';

const spfRoutes: Routes = [
  {
    path: 'spf',
    component: SPFComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: SPFMainComponent,
      },
      {
        path: 'incident',
        component: SPFIncidentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(spfRoutes),
  ],
  exports:[RouterModule]
})
export class SPFRoutingModule { }
