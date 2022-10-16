import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TouristPost } from 'src/app/shared/model/post.model';
import { TouristBlogsService } from 'src/app/shared/service/tourist-blogs.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit,OnDestroy {

  touristPosts: BehaviorSubject<any> =new BehaviorSubject(null);
  touristPosts$ = this.touristPosts.asObservable();

  constructor(private touristBlogService: TouristBlogsService) { }

  getAllPosts() {
    this.touristBlogService.getPosts().subscribe((res)=> {
      this.touristPosts.next(res);
      console.log(res);
    })
  }
  ngOnInit(): void {
    this.getAllPosts();
  }

  ngOnDestroy() {
    this.touristPosts.unsubscribe();
  }

}
