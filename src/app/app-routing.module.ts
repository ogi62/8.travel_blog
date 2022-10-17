import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/shell/login/login.component';
import { SignUpComponent } from './shared/shell/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/all-blogs/all-blogs.module').then(
        (m) => m.AllBlogsModule
      ),
  },
  {
    path: 'new_blog',
    loadChildren: () =>
      import('./feature/new-blog/new-blog.module').then((m) => m.NewBlogModule),
  },
  {
    path: 'top_cities',
    loadChildren: () =>
      import('./feature/top-cities/top-cities.module').then(
        (m) => m.TopCitiesModule
      ),
  },
  {
    path: 'traveling',
    loadChildren: () =>
      import('./feature/traveling/traveling.module').then(
        (m) => m.TravelingModule
      ),
  },
  {
    path: 'food_posts',
    loadChildren: () =>
      import('./feature/food/food.module').then((m) => m.FoodModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.module').then((m)=> m.AdminModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
