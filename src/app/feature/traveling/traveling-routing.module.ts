import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelingComponent } from './components/traveling/traveling.component';

const routes: Routes = [{ path: '', component: TravelingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelingRoutingModule { }
