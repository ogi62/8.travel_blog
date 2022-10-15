import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelingComponent } from './components/traveling/traveling.component';
import { TravelingRoutingModule } from './traveling-routing.module';



@NgModule({
  declarations: [
    TravelingComponent
  ],
  imports: [
    CommonModule,
    TravelingRoutingModule
  ]
})
export class TravelingModule { }
