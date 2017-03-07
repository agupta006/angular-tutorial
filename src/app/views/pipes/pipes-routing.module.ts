import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AvailablePipesComponent } from './available-pipes/available-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

const routes: Routes = [
  {
       path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'available',
    pathMatch: 'full'
  }, {
    path: 'custom',
    component: CustomPipesComponent
  },{
    path : 'available',
    component : AvailablePipesComponent
  }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PipesRoutingModule { }
