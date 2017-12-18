import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpRequestComponent } from './http-request/http-request.component';

import { AppComponent } from './app.component';
import { FormRuntimeComponent } from './form-runtime/form-runtime.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { Angular5templatedrivenComponent } from './angular5templatedriven/angular5templatedriven.component';
import { Angular5reactiveComponent } from './angular5reactive/angular5reactive.component';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';

export const router: Routes = [
    { path: '', redirectTo: 'validateruntime', pathMatch: 'full' },
    { path: 'validateruntime', component:  FormRuntimeComponent },
    { path: 'dynamicforms', component:  DynamicFormsComponent },
    { path: 'httpRequest', component:  HttpRequestComponent },
    { path: 'template', component:  TemplateDrivenComponent },
    { path: 'angular-5template', component:  Angular5templatedrivenComponent },
    { path: 'angular-5reactive', component: Angular5reactiveComponent},
    { path: 'customformvalidation', component: CustomvalidationComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);