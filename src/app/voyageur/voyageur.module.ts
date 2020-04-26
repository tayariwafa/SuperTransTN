import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoyageurRoutingModule } from './voyageur-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VoyageurRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class VoyageurModule { }
