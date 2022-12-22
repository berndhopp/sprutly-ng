/* tslint:disable */
/* eslint-disable */
export interface BaseOffer {
  area: number;
  description: string;
  featureField: number;
  floor: number;
  imageUrl: string;
  latitude: number;
  longitude: number;
  offerCategory: 'Buy' | 'Rent';
  price: number;
  propertyCategory: 'House' | 'Apartment';
  rooms: number;
  targetUrl: string;
  title: string;
}
