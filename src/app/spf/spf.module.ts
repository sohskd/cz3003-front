import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPFComponent } from './spf.component';
import { SPFMainComponent } from './component/spfmain/spfmain.component';
import { SPFRoutingModule } from './spf-routing.module';
import { SPFIncidentComponent } from './component/spfincident/spfincident.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    SPFRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtm2mVTSZRWM0DdHYhAVmUyDMQPyh-nPQ',
    }),
    FormsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    SPFComponent,
    SPFMainComponent,
    SPFIncidentComponent
  ]
})
export class SPFModule { }
