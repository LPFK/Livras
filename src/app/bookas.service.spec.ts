import { TestBed } from '@angular/core/testing';

import { BookasService } from './bookas.service';

describe('BookasService', () => {
  let service: BookasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
