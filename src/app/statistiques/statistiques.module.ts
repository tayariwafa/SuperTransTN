import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiquesRoutingModule } from './statistiques-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StatistiquesRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class StatistiquesModule { }
