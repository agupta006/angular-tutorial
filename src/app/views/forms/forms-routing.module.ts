import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormTemplateComponent } from './form-template/form-template.component';

const routes: Routes = [{
   path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'reactiveForm',
    pathMatch: 'full'
  }, {
    path: 'reactiveForm',
    component: FormTemplateComponent
  }]
}];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
