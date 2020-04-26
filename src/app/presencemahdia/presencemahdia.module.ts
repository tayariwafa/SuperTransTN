import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencemahdiaRoutingModule } from './presencemahdia-routing.module';
import { PresencemahdiaComponent } from './presencemahdia.component';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PresencemahdiaComponent],
  imports: [
    CommonModule,
    PresencemahdiaRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class PresencemahdiaModule { }
