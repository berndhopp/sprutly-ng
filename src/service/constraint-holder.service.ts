import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstraintHolderService {
  geoJson = '';
  offerCategory: 'Rent' | 'Buy' = 'Rent';
  searchApartment? = true;
  searchHouse? = true;
  areaMax? = -1;
  areaMin? = -1;
  priceMax? = -1;
  priceMin? = -1;
  roomsMax? = -1;
  roomsMin? = -1;
  distanceToCafe?: number;
  distanceToForest?: number;
  distanceToHospital?: number;
  distanceToKindergarten?: number;
  distanceToLake?: number;
  distanceToSupermarket?: number;
  distanceToRestaurant?: number;

  constructor() {
  }
}
