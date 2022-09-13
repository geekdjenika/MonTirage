import { TestBed } from '@angular/core/testing';

import { DetailsPostulantTiresService } from './details-postulant-tires.service';

describe('DetailsPostulantTiresService', () => {
  let service: DetailsPostulantTiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsPostulantTiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
