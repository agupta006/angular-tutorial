import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from'@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, FormTemplateComponent, FormTemplateDrivenComponent]
})
export class FormsModule { }
