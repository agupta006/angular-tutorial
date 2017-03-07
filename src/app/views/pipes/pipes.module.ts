import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { AvailablePipesComponent } from './available-pipes/available-pipes.component';
import { CubePipe } from './custom-pipes/cube.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, CustomPipesComponent, AvailablePipesComponent, CubePipe]
})
export class PipesModule { }
