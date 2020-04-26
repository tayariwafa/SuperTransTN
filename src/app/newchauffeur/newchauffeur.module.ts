import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewchauffeurRoutingModule } from './newchauffeur-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewchauffeurRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class NewchauffeurModule { }
