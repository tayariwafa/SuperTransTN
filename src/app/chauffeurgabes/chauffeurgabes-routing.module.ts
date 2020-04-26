import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChauffeurgabesComponent } from './chauffeurgabes.component';


const routes: Routes = [
  {
    path: '',
    component: ChauffeurgabesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChauffeurgabesRoutingModule { }
