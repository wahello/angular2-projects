import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { SeComponentModule } from '../components/se.component.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeDirectiveModule } from '../directives/se.directive.module';

const COMPONENTS = [
    DashboardComponent
];

@NgModule({
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        SeComponentModule,
        SeDirectiveModule,
        MaterialModule,
    ],
    declarations: [PagesComponent, ...COMPONENTS],
})
export class PagesModule {
}