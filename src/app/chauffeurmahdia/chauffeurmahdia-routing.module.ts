import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChauffeurmahdiaComponent } from './chauffeurmahdia.component';


const routes: Routes = [
  {
    path: '',
    component: ChauffeurmahdiaComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChauffeurmahdiaRoutingModule { }
