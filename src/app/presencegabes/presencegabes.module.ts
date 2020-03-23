import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencegabesRoutingModule } from './presencegabes-routing.module';
import { PresencegabesComponent } from './presencegabes.component';


@NgModule({
  declarations: [PresencegabesComponent],
  imports: [
    CommonModule,
    PresencegabesRoutingModule
  ]
})
export class PresencegabesModule { }
