import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PmoComponent } from './pmo.component';
import { PmoMainComponent } from 'src/app/PMO/component/pmo-main/pmo-main.component';
import { PmoReportComponent } from 'src/app/PMO/component/pmo-report/pmo-report.component'
import { PmoRoutingModule } from './pmo-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgmCoreModule } from '@agm/core';
import { FeedbackComponent } from './component/feedback/feedback.component';

@NgModule({
  declarations: [
  	PmoComponent,
    PmoMainComponent,
    PmoReportComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    PmoRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtm2mVTSZRWM0DdHYhAVmUyDMQPyh-nPQ',
    }),
    FormsModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [
    PmoComponent
  ],
})
export class PmoModule { }
