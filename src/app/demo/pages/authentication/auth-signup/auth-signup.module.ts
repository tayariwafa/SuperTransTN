import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupRoutingModule } from './auth-signup-routing.module';
import { AuthSignupComponent } from './auth-signup.component';
import { DashboardModule } from 'src/app/demo/dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    AuthSignupRoutingModule,
    DashboardModule
  ],
  declarations: [AuthSignupComponent]
})
export class AuthSignupModule { }
