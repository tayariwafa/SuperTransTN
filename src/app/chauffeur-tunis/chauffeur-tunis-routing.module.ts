import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChauffeurTunisComponent } from './chauffeur-tunis.component';


const routes: Routes = [
  {
    path: '',
    component: ChauffeurTunisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChauffeurTunisRoutingModule { }
