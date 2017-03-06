import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';

const routes: Routes = [{
   path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'templateForm',
    pathMatch: 'full'
  }, {
    path: 'reactiveForm',
    component: FormTemplateComponent
  },{
    path : 'templateForm',
    component : FormTemplateDrivenComponent
  }]
}];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
