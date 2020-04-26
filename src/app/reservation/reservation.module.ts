import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class ReservationModule { }
