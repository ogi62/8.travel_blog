import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTouristBlogComponent } from './single-tourist-blog.component';

describe('SingleTouristBlogComponent', () => {
  let component: SingleTouristBlogComponent;
  let fixture: ComponentFixture<SingleTouristBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTouristBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTouristBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
