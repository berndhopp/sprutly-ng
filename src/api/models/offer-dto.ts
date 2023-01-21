/* tslint:disable */
/* eslint-disable */
export interface OfferDto {
  area: number;
  balcony: boolean;
  cellar: boolean;
  closestCafeOsmId: number;
  closestForestOsmId: number;
  closestHospitalOsmId: number;
  closestKindergartenOsmId: number;
  closestLakeOsmId: number;
  closestRestaurantOsmId: number;
  closestSupermarketOsmId: number;
  description: string;
  distanceToCafe: number;
  distanceToForest: number;
  distanceToHospital: number;
  distanceToKindergarten: number;
  distanceToLake: number;
  distanceToRestaurant: number;
  distanceToSupermarket: number;
  equippedKitchen: boolean;
  floor: number;
  garage: boolean;
  guestToilet: boolean;
  id: string;
  imageUrl: string;
  latitude: number;
  lift: boolean;
  longitude: number;
  offerCategory: 'Buy' | 'Rent';
  positionName: string;
  price: number;
  propertyCategory: 'House' | 'Apartment';
  rooms: number;
  title: string;
}
