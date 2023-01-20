/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Offer } from '../models/offer';
import { OfferStub } from '../models/offer-stub';

@Injectable({
  providedIn: 'root',
})
export class OfferControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchOffers
   */
  static readonly SearchOffersPath = '/api/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOffers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOffers$Response(params: {
    geoJson: string;
    priceMin?: number;
    priceMax?: number;
    roomsMin?: number;
    roomsMax?: number;
    areaMin?: number;
    areaMax?: number;
    searchHouse?: boolean;
    searchApartment?: boolean;
    offerCategory: 'Buy' | 'Rent';
    distanceToCafe?: number;
    distanceToForest?: number;
    distanceToHospital?: number;
    distanceToKindergarten?: number;
    distanceToLake?: number;
    distanceToSupermarket?: number;
    distanceToRestaurant?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OfferStub>>> {

    const rb = new RequestBuilder(this.rootUrl, OfferControllerService.SearchOffersPath, 'get');
    if (params) {
      rb.query('geoJson', params.geoJson, {});
      rb.query('priceMin', params.priceMin, {});
      rb.query('priceMax', params.priceMax, {});
      rb.query('roomsMin', params.roomsMin, {});
      rb.query('roomsMax', params.roomsMax, {});
      rb.query('areaMin', params.areaMin, {});
      rb.query('areaMax', params.areaMax, {});
      rb.query('searchHouse', params.searchHouse, {});
      rb.query('searchApartment', params.searchApartment, {});
      rb.query('offerCategory', params.offerCategory, {});
      rb.query('distanceToCafe', params.distanceToCafe, {});
      rb.query('distanceToForest', params.distanceToForest, {});
      rb.query('distanceToHospital', params.distanceToHospital, {});
      rb.query('distanceToKindergarten', params.distanceToKindergarten, {});
      rb.query('distanceToLake', params.distanceToLake, {});
      rb.query('distanceToSupermarket', params.distanceToSupermarket, {});
      rb.query('distanceToRestaurant', params.distanceToRestaurant, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfferStub>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchOffers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOffers(params: {
    geoJson: string;
    priceMin?: number;
    priceMax?: number;
    roomsMin?: number;
    roomsMax?: number;
    areaMin?: number;
    areaMax?: number;
    searchHouse?: boolean;
    searchApartment?: boolean;
    offerCategory: 'Buy' | 'Rent';
    distanceToCafe?: number;
    distanceToForest?: number;
    distanceToHospital?: number;
    distanceToKindergarten?: number;
    distanceToLake?: number;
    distanceToSupermarket?: number;
    distanceToRestaurant?: number;
    context?: HttpContext
  }
): Observable<Array<OfferStub>> {

    return this.searchOffers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OfferStub>>) => r.body as Array<OfferStub>)
    );
  }

  /**
   * Path part for operation getOffer
   */
  static readonly GetOfferPath = '/api/offers/{offerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOffer$Response(params: {
    offerId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Offer>> {

    const rb = new RequestBuilder(this.rootUrl, OfferControllerService.GetOfferPath, 'get');
    if (params) {
      rb.path('offerId', params.offerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Offer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOffer(params: {
    offerId: string;
    context?: HttpContext
  }
): Observable<Offer> {

    return this.getOffer$Response(params).pipe(
      map((r: StrictHttpResponse<Offer>) => r.body as Offer)
    );
  }

}
