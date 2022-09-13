import { TestBed } from '@angular/core/testing';

import { DetailsTirageService } from './details-tirage.service';

describe('DetailsTirageService', () => {
  let service: DetailsTirageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsTirageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
