import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TouristPost } from 'src/app/shared/model/post.model';
import { TouristBlogsService } from 'src/app/shared/service/tourist-blogs.service';

@Component({
  selector: 'app-all-tourist-blogs',
  templateUrl: './all-tourist-blogs.component.html',
  styleUrls: ['./all-tourist-blogs.component.scss']
})
export class AllTouristBlogsComponent implements OnInit, OnDestroy {
  touristPosts: BehaviorSubject<any> = new BehaviorSubject(null);
  touristPosts$ = this.touristPosts.asObservable();
  isLoading = false;

  constructor(
    private touristBlogService: TouristBlogsService,
    private router: Router
    ) {}

  getAllPosts() {
    this.isLoading = true;
    this.touristBlogService.getPosts().subscribe((res) => {
      this.touristPosts.next(res);
      this.isLoading = false;
    });
  }

  goToSinglePost(p: TouristPost) {
    console.log(p.postTitle)
    this.router.navigate(['/home/all_blogs/', p.id]);
  }
  ngOnInit(): void {
    this.getAllPosts();
  }

  ngOnDestroy() {
    this.touristPosts.unsubscribe();
  }

}
