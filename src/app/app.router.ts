import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpRequestComponent } from './http-request/http-request.component';

import { AppComponent } from './app.component';
import { FormRuntimeComponent } from './form-runtime/form-runtime.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

export const router: Routes = [
    { path: '', redirectTo: 'validateruntime', pathMatch: 'full' },
    { path: 'validateruntime', component:  FormRuntimeComponent },
    { path: 'dynamicforms', component:  DynamicFormsComponent },
    { path: 'httpRequest', component:  HttpRequestComponent },
    { path: 'template', component:  TemplateDrivenComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);