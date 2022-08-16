import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'all_blogs',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
