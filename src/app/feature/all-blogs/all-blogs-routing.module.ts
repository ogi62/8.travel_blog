import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from './all-blogs.component';
import { AllTouristBlogsComponent } from './components/all-tourist-blogs/all-tourist-blogs.component';
import { SingleTouristBlogComponent } from './components/single-tourist-blog/single-tourist-blog.component';

const routes: Routes = [
  {
    path: '',
    component: AllBlogsComponent,
    children: [
      {
        path: 'all_blogs/:id',
        component: SingleTouristBlogComponent,
      },
      {
        path: 'all_blogs',
        component: AllTouristBlogsComponent
      },
      {
        path: '',
        redirectTo: 'all_blogs',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBlogsRoutingModule {}
