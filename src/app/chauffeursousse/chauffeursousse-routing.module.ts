import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChauffeursousseComponent } from './chauffeursousse.component';


const routes: Routes = [
  {
    path: '',
    component: ChauffeursousseComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChauffeursousseRoutingModule { }
