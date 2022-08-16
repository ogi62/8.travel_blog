import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopCitiesRoutingModule } from './top-cities-routing.module';
import { TopCitiesComponent } from './top-cities.component';


@NgModule({
  declarations: [
    TopCitiesComponent
  ],
  imports: [
    CommonModule,
    TopCitiesRoutingModule
  ]
})
export class TopCitiesModule { }
