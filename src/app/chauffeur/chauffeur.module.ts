import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChauffeurRoutingModule } from './chauffeur-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChauffeurRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class ChauffeurModule { }
