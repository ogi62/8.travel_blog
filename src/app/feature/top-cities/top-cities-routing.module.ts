import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCitiesComponent } from './top-cities.component';

const routes: Routes = [{ path: '', component: TopCitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopCitiesRoutingModule { }
