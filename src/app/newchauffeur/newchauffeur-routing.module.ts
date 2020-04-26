import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewchauffeurComponent } from './newchauffeur.component';


const routes: Routes = [
  {
    path: '',
    component: NewchauffeurComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewchauffeurRoutingModule { }
