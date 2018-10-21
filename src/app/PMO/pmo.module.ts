import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PmoComponent } from './pmo.component';
import { PmoMainComponent } from 'src/app/PMO/component/pmo-main/pmo-main.component';
import { PmoReportComponent } from 'src/app/PMO/component/pmo-report/pmo-report.component'
import { PmoRoutingModule } from './pmo-routing.module'

@NgModule({
  declarations: [
  	PmoComponent,
    PmoMainComponent,
    PmoReportComponent,
  ],
  imports: [
    CommonModule,
    PmoRoutingModule,
  ],
  entryComponents: [
    PmoComponent
  ],
})
export class PmoModule { }
