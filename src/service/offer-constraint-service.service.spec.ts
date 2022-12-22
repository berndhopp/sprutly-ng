import { TestBed } from '@angular/core/testing';

import { OfferConstraintService } from './offer-constraint.service';

describe('OfferConstraintServiceService', () => {
  let service: OfferConstraintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferConstraintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
