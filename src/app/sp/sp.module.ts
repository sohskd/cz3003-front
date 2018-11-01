import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPComponent } from './sp.component';
import { SPRoutingModule } from './sp-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SPMainComponent } from './component/spmain/spmain.component';
import { SPIncidentComponent } from './component/spincident/spincident.component';

@NgModule({
  imports: [
    CommonModule,
    SPRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtm2mVTSZRWM0DdHYhAVmUyDMQPyh-nPQ',
    }),
    FormsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    SPComponent,
    SPMainComponent,
    SPIncidentComponent
  ]
})
export class SPModule { }
