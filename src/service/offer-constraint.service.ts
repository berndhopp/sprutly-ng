import { Injectable } from '@angular/core';
import {OfferSearchRequest} from "../api/models/offer-search-request";

@Injectable({
  providedIn: 'root'
})
export class OfferConstraintService {

  offerSearchRequest: OfferSearchRequest = {
    geoConstraint: {
      geoJson: ''
    },
    amenityMaxDistances: {
    },
    areaMax: -1,
    areaMin: -1,
    mustHaveFeatures: [],
    offerCategory: 'Rent',
    niceToHaveFeatures: [],
    priceMax: -1,
    priceMin: -1,
    propertyCategories: ['House', 'Apartment'],
    roomsMax: -1,
    roomsMin: -1
  }

  constructor() {
  }
}
