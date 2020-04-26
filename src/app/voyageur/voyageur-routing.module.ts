import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoyageurComponent } from './voyageur.component';


const routes: Routes = [
  {
    path: '',
    component: VoyageurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoyageurRoutingModule { }
