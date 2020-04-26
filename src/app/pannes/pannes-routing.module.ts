import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PannesComponent } from './pannes.component';


const routes: Routes = [
  {
    path: '',
    component: PannesComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PannesRoutingModule { }
