import { Injectable } from '@angular/core';
import {ConstraintHolderService} from "./constraint-holder.service";
import {OfferControllerService} from "../api/services/offer-controller.service";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private constraintService: ConstraintHolderService,
    private offerControllerService: OfferControllerService
  ) {
  }

  search() {
    firstValueFrom(this.offerControllerService.searchOffers({
      body: {
        geojson: this.constraintService.geoJson,
        notifyOnNewMatches: false,
        offerCategory: this.constraintService.offerCategory,
        roomsMin: this.constraintService.roomsMin,
        roomsMax: this.constraintService.roomsMax,
        areaMin: this.constraintService.areaMin,
        areaMax: this.constraintService.areaMax,
        searchApartment: this.constraintService.searchApartment,
        searchHouse: this.constraintService.searchHouse,
        distanceToCafe: this.constraintService.distanceToCafe,
        distanceToForest: this.constraintService.distanceToForest,
        distanceToHospital: this.constraintService.distanceToHospital,
        distanceToKindergarten: this.constraintService.distanceToKindergarten,
        distanceToLake: this.constraintService.distanceToLake,
        distanceToSupermarket: this.constraintService.distanceToSupermarket,
        distanceToRestaurant: this.constraintService.distanceToRestaurant
      }
    }))
      .then(searchResults => {

      })
      .catch(reason => {

      })
  }
}
