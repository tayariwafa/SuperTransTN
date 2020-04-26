import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresencemahdiaComponent } from './presencemahdia.component';


const routes: Routes = [
  {
    path: '',
    component: PresencemahdiaComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresencemahdiaRoutingModule { }
