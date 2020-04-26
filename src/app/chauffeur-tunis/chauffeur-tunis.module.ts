import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChauffeurTunisRoutingModule } from './chauffeur-tunis-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChauffeurTunisRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class ChauffeurTunisModule { }
