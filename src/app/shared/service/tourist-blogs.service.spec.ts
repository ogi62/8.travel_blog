import { TestBed } from '@angular/core/testing';

import { TouristBlogsService } from './tourist-blogs.service';

describe('TouristBlogsService', () => {
  let service: TouristBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
