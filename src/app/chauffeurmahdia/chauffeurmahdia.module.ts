import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChauffeurmahdiaRoutingModule } from './chauffeurmahdia-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChauffeurmahdiaRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class ChauffeurmahdiaModule { }
