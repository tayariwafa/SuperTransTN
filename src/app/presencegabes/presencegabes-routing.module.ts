import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresencegabesComponent } from './presencegabes.component';


const routes: Routes = [
  {
    path: '',
    component: PresencegabesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresencegabesRoutingModule { }
