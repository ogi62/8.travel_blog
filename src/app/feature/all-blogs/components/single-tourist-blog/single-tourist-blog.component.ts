import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Subject, takeUntil } from 'rxjs';
import { TouristPost } from 'src/app/shared/model/post.model';
import { TouristBlogsService } from 'src/app/shared/service/tourist-blogs.service';

@Component({
  selector: 'app-single-tourist-blog',
  templateUrl: './single-tourist-blog.component.html',
  styleUrls: ['./single-tourist-blog.component.scss']
})
export class SingleTouristBlogComponent implements OnInit, OnDestroy {

  singleBlog!: TouristPost;
  id: any;
  unsubscribe: Subject<void> = new Subject<void>();
  loading = false;
  constructor(
    private touristService: TouristBlogsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.touristService.getPost(this.id).pipe(takeUntil(this.unsubscribe)).subscribe((data: TouristPost)=> {
        console.log(data);
        this.singleBlog = data;
        this.loading = false;
      })
    }
    
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
