/* tslint:disable */
/* eslint-disable */
export interface Offer {
  area: number;
  description: string;
  distanceToForest: number;
  distanceToHospital: number;
  distanceToKindergarten: number;
  distanceToLake: number;
  distanceToSupermarket: number;
  featureField: number;
  floor: number;
  id?: string;
  imageUrl: string;
  lat: number;
  lon: number;
  offerCategory: 'Buy' | 'Rent';
  positionName: string;
  price: number;
  propertyCategory: 'House' | 'Apartment';
  rooms: number;
  targetUrl: string;
  title: string;
}
