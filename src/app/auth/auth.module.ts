import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../services/auth.service';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    SharedModule,
    MatStepperModule,
    MatSelectModule,
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent,
    
  ],  
  providers: [
    AuthService,
  ]

})
export class AuthModule { }
