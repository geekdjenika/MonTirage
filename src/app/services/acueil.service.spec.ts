import { TestBed } from '@angular/core/testing';

import { Accueil } from '../services/acueil.service';

describe('AcueilService', () => {
  let service: Accueil;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Accueil);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
