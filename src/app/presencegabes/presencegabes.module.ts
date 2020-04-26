import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencegabesRoutingModule } from './presencegabes-routing.module';
import { PresencegabesComponent } from './presencegabes.component';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PresencegabesComponent],
  imports: [
    CommonModule,
    PresencegabesRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class PresencegabesModule { }
