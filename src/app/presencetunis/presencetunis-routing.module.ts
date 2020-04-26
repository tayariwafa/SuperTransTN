import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresencetunisComponent } from './presencetunis.component';

const routes: Routes = [
  {
    path: '',
    component: PresencetunisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresencetunisRoutingModule { }
