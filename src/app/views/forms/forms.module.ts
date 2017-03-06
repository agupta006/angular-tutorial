import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';


import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class FormsModule { }
