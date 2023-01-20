import { TestBed } from '@angular/core/testing';

import { ConstraintHolderService } from './constraint-holder.service';

describe('OfferConstraintServiceService', () => {
  let service: ConstraintHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstraintHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
