import { platformBrowserDynamic }                               from '@angular/platform-browser-dynamic';
import { BrowserModule }                                        from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA }                           from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule }                     from '@angular/forms';
import { HttpModule }                                           from '@angular/http';
import { Title }  from '@angular/platform-browser';
import { appRoutes }                         from './app.router';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { QueryComponent } from './query/query.component';
import { TermComponent } from './term/term.component';

import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      HttpModule,
      appRoutes,
      // AgmCoreModule.forRoot({
      //   // apiKey: environment.googleMapApiKey
      // })
    ],
    declarations: [
      AppComponent,
      QueryComponent,
      ReportComponent,
      TermComponent,
    ],
    providers: [
      Title,
      { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [AppComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
