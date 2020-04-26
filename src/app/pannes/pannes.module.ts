import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PannesRoutingModule } from './pannes-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PannesRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class PannesModule { }
