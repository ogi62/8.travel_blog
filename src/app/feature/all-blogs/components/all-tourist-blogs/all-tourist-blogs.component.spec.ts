import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTouristBlogsComponent } from './all-tourist-blogs.component';

describe('AllTouristBlogsComponent', () => {
  let component: AllTouristBlogsComponent;
  let fixture: ComponentFixture<AllTouristBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTouristBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTouristBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
