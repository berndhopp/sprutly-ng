/* tslint:disable */
/* eslint-disable */
import { CircleGeoConstraint } from './circle-geo-constraint';
import { GeoJsonConstraint } from './geo-json-constraint';
export interface OfferSearchRequest {
  amenityMaxDistances: {
[key: string]: number;
};
  areaMax: number;
  areaMin: number;
  geoConstraint: (CircleGeoConstraint | GeoJsonConstraint);
  mustHaveFeatures: Array<'BALCONY' | 'GARAGE' | 'EQUIPPED_KITCHEN' | 'LIFT' | 'CELLAR' | 'GUEST_TOILET'>;
  niceToHaveFeatures: Array<'BALCONY' | 'GARAGE' | 'EQUIPPED_KITCHEN' | 'LIFT' | 'CELLAR' | 'GUEST_TOILET'>;
  offerCategory: 'Buy' | 'Rent';
  priceMax: number;
  priceMin: number;
  propertyCategories: Array<'House' | 'Apartment'>;
  roomsMax: number;
  roomsMin: number;
}
