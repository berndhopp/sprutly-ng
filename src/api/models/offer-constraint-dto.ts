/* tslint:disable */
/* eslint-disable */
export interface OfferConstraintDto {
  areaMax?: number;
  areaMin?: number;
  distanceToCafe?: number;
  distanceToForest?: number;
  distanceToHospital?: number;
  distanceToKindergarten?: number;
  distanceToLake?: number;
  distanceToRestaurant?: number;
  distanceToSupermarket?: number;
  geojson: string;
  notifyOnNewMatches: boolean;
  offerCategory: 'Buy' | 'Rent';
  priceMax?: number;
  priceMin?: number;
  roomsMax?: number;
  roomsMin?: number;
  searchApartment: boolean;
  searchHouse: boolean;
}
