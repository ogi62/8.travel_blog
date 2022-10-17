import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBlogsRoutingModule } from './all-blogs-routing.module';
import { AllBlogsComponent } from './all-blogs.component';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AllBlogsComponent,
    LoadingSpinnerComponent
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
