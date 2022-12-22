/* tslint:disable */
/* eslint-disable */
export interface PriceAndAreaStatsRequest {
  amenityMaxDistances: {
[key: string]: number;
};
  geoJson: string;
  mustHaveFeatures: Array<'BALCONY' | 'GARAGE' | 'EQUIPPED_KITCHEN' | 'LIFT' | 'CELLAR' | 'GUEST_TOILET'>;
  niceToHaveFeatures: Array<'BALCONY' | 'GARAGE' | 'EQUIPPED_KITCHEN' | 'LIFT' | 'CELLAR' | 'GUEST_TOILET'>;
  offerCategory: 'Buy' | 'Rent';
  propertyCategories: Array<'House' | 'Apartment'>;
}
