import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncoursRoutingModule } from './encours-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EncoursRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class EncoursModule { }
