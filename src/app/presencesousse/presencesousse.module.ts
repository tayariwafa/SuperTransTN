import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencesousseRoutingModule } from './presencesousse-routing.module';
import { PresencesousseComponent } from './presencesousse.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../theme/shared/shared.module';


@NgModule({
  declarations: [PresencesousseComponent],
  imports: [
    CommonModule,
    PresencesousseRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class PresencesousseModule { }
