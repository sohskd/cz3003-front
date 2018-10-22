import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallCenterMainComponent } from 'src/app/CallCenter/component/call-center-main/call-center-main.component';
import { CallCenterRoutingModule } from 'src/app/CallCenter/call-center-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { CallCenterIncidentComponent } from 'src/app/CallCenter/component/call-center-incident/call-center-incident.component';
import { FormsModule } from '@angular/forms';
import { CallCenterCreateIncidentComponent } from 'src/app/CallCenter/component/call-center-create-incident/call-center-create-incident.component';
import { CallCenterComponent } from './call-center.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    CallCenterRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtm2mVTSZRWM0DdHYhAVmUyDMQPyh-nPQ',
    }),
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    CallCenterMainComponent,
    CallCenterIncidentComponent,
    CallCenterCreateIncidentComponent,
  ]
})
export class CallCenterModuleModule { }
