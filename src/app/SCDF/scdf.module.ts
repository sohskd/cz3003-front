import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScdfComponent } from './scdf.component';
import { ScdfMainComponent } from './component/scdf-main/scdf-main.component';
import { ScdfIncidentComponent } from './component/scdf-incident/scdf-incident.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ScdfRoutingModule } from './scdf-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ScdfRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtm2mVTSZRWM0DdHYhAVmUyDMQPyh-nPQ',
    }),
    FormsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ScdfComponent,
    ScdfIncidentComponent,
    ScdfMainComponent
  ],
  entryComponents: [
    ScdfComponent
  ],
})
export class ScdfModule { }
