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

import { OfferConstraintDto } from '../models/offer-constraint-dto';
import { OfferDto } from '../models/offer-dto';

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
   * Path part for operation createOffer
   */
  static readonly CreateOfferPath = '/api/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOffer$Response(params: {
    context?: HttpContext
    body: OfferDto
  }
): Observable<StrictHttpResponse<OfferDto>> {

    const rb = new RequestBuilder(this.rootUrl, OfferControllerService.CreateOfferPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OfferDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOffer(params: {
    context?: HttpContext
    body: OfferDto
  }
): Observable<OfferDto> {

    return this.createOffer$Response(params).pipe(
      map((r: StrictHttpResponse<OfferDto>) => r.body as OfferDto)
    );
  }

  /**
   * Path part for operation searchOffers
   */
  static readonly SearchOffersPath = '/api/offers/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOffers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  searchOffers$Response(params: {
    context?: HttpContext
    body: OfferConstraintDto
  }
): Observable<StrictHttpResponse<Array<OfferDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OfferControllerService.SearchOffersPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfferDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchOffers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  searchOffers(params: {
    context?: HttpContext
    body: OfferConstraintDto
  }
): Observable<Array<OfferDto>> {

    return this.searchOffers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OfferDto>>) => r.body as Array<OfferDto>)
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
): Observable<StrictHttpResponse<OfferDto>> {

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
        return r as StrictHttpResponse<OfferDto>;
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
): Observable<OfferDto> {

    return this.getOffer$Response(params).pipe(
      map((r: StrictHttpResponse<OfferDto>) => r.body as OfferDto)
    );
  }

  /**
   * Path part for operation searches
   */
  static readonly SearchesPath = '/api/offers/searches/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searches()` instead.
   *
   * This method doesn't expect any request body.
   */
  searches$Response(params: {
    olderThan: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OfferConstraintDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OfferControllerService.SearchesPath, 'get');
    if (params) {
      rb.query('olderThan', params.olderThan, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfferConstraintDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searches$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searches(params: {
    olderThan: string;
    context?: HttpContext
  }
): Observable<Array<OfferConstraintDto>> {

    return this.searches$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OfferConstraintDto>>) => r.body as Array<OfferConstraintDto>)
    );
  }

}
