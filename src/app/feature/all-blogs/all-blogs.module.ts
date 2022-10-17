import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBlogsRoutingModule } from './all-blogs-routing.module';
import { AllBlogsComponent } from './all-blogs.component';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { SingleTouristBlogComponent } from './components/single-tourist-blog/single-tourist-blog.component';
import { AllTouristBlogsComponent } from './components/all-tourist-blogs/all-tourist-blogs.component';


@NgModule({
  declarations: [
    AllBlogsComponent,
    LoadingSpinnerComponent,
    SingleTouristBlogComponent,
    AllTouristBlogsComponent
  ],
  imports: [
    CommonModule,
    AllBlogsRoutingModule,
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class AllBlogsModule { }
