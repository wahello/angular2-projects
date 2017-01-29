import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth-guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService,
        AuthGuard
    ],
    exports: [

    ]
})

export class LoginModule {

}