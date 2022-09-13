import { TestBed } from '@angular/core/testing';

import { DetailsListeService } from './details-liste.service';

describe('DetailsListeService', () => {
  let service: DetailsListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
