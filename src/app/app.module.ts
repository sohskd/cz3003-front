import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { CallCenterModuleModule } from 'src/app/CallCenter/call-center-module.module';
import { PmoModule } from './PMO/pmo.module';
import { LoginComponent } from './login/login.component';
import { ScdfModule } from './SCDF/scdf.module';
import { SPModule } from './sp/sp.module';
import { SPFModule } from './spf/spf.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtm2mVTSZRWM0DdHYhAVmUyDMQPyh-nPQ',
    }),
    CallCenterModuleModule,
    PmoModule,
    ScdfModule,
    SPModule,
    SPFModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
