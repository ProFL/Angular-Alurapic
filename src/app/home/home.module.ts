import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/signup.component';
import { SignUpService } from './singup/signup.service';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        HomeComponent,
        SignInComponent,
        SignUpComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        HomeRoutingModule,
    ],
    providers: [
        SignUpService,
    ]
})
export class HomeModule { }
