import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresencesousseComponent } from './presencesousse.component';


const routes: Routes = [
  {
    path: '',
    component: PresencesousseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresencesousseRoutingModule { }
