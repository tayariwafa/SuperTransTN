import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChauffeursousseRoutingModule } from './chauffeursousse-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChauffeursousseRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class ChauffeursousseModule { }
