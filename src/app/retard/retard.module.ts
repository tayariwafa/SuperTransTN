import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetardRoutingModule } from './retard-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RetardRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class RetardModule { }
