import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBlogRoutingModule } from './new-blog-routing.module';
import { NewBlogComponent } from './new-blog.component';


@NgModule({
  declarations: [
    NewBlogComponent
  ],
  imports: [
    CommonModule,
    NewBlogRoutingModule
  ]
})
export class NewBlogModule { }
