import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencesousseRoutingModule } from './presencesousse-routing.module';
import { PresencesousseComponent } from './presencesousse.component';


@NgModule({
  declarations: [PresencesousseComponent],
  imports: [
    CommonModule,
    PresencesousseRoutingModule
  ]
})
export class PresencesousseModule { }
