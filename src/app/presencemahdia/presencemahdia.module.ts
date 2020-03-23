import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencemahdiaRoutingModule } from './presencemahdia-routing.module';
import { PresencemahdiaComponent } from './presencemahdia.component';


@NgModule({
  declarations: [PresencemahdiaComponent],
  imports: [
    CommonModule,
    PresencemahdiaRoutingModule
  ]
})
export class PresencemahdiaModule { }
