import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencetunisRoutingModule } from './presencetunis-routing.module';
import { PresencetunisComponent } from './presencetunis.component';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PresencetunisComponent],
  imports: [
    CommonModule,
    PresencetunisRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class PresencetunisModule { }
