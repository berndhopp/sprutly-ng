import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstraintHolderService {
  geoJson = '';
  offerCategory: 'Rent' | 'Buy' = 'Rent';
  searchApartment = true;
  searchHouse = true;
  areaMax? = 0;
  areaMin? = 0;
  priceMax? = 0;
  priceMin? = 0;
  roomsMax? = -1;
  roomsMin? = 0;
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
