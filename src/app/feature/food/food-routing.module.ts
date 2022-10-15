import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPostsComponent } from './components/food-posts/food-posts.component';

const routes: Routes = [{ path: '', component: FoodPostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
