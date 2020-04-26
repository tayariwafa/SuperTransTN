import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetardComponent } from './retard.component';


const routes: Routes = [
  {
    path: '',
    component: RetardComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetardRoutingModule { }
