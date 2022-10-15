import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPostsComponent } from './food-posts.component';

describe('FoodPostsComponent', () => {
  let component: FoodPostsComponent;
  let fixture: ComponentFixture<FoodPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
