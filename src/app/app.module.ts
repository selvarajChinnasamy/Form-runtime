import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormRuntimeComponent } from './form-runtime/form-runtime.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import {  AgmCoreModule } from '@agm/core';
import { HttpRequestComponent } from './http-request/http-request.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { Angular5templatedrivenComponent } from './angular5templatedriven/angular5templatedriven.component';
import { Angular5reactiveComponent } from './angular5reactive/angular5reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRuntimeComponent,
    DynamicFormsComponent,
    HttpRequestComponent,
    TemplateDrivenComponent,
    Angular5templatedrivenComponent,
    Angular5reactiveComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule, 
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlSL508P4TNSpIh8rD8rdoraXRyrK-nGg',
      libraries: ["places"]
}),
HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
