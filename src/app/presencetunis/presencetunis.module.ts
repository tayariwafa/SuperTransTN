import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencetunisRoutingModule } from './presencetunis-routing.module';
import { PresencetunisComponent } from './presencetunis.component';


@NgModule({
  declarations: [PresencetunisComponent],
  imports: [
    CommonModule,
    PresencetunisRoutingModule
  ]
})
export class PresencetunisModule { }
