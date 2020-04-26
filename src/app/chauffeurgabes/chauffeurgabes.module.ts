import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChauffeurgabesRoutingModule } from './chauffeurgabes-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChauffeurgabesRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class ChauffeurgabesModule { }
