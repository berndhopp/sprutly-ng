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

import { BaseOffer } from '../models/base-offer';
import { Offer } from '../models/offer';
import { OfferSearchRequest } from '../models/offer-search-request';
import { OfferStub } from '../models/offer-stub';
import { PriceAndAreaStats } from '../models/price-and-area-stats';
import { PriceAndAreaStatsRequest } from '../models/price-and-area-stats-request';

@Injectable({
  providedIn: 'root',
})
export class OfferEndpointService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation addOffer
   */
  static readonly AddOfferPath = '/api/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOffer$Response(params: {
    context?: HttpContext
    body: BaseOffer
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OfferEndpointService.AddOfferPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOffer(params: {
    context?: HttpContext
    body: BaseOffer
  }
): Observable<void> {

    return this.addOffer$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation search
   */
  static readonly SearchPath = '/api/offers/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `search()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  search$Response(params: {
    context?: HttpContext
    body: OfferSearchRequest
  }
): Observable<StrictHttpResponse<Array<OfferStub>>> {

    const rb = new RequestBuilder(this.rootUrl, OfferEndpointService.SearchPath, 'post');
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
        return r as StrictHttpResponse<Array<OfferStub>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `search$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  search(params: {
    context?: HttpContext
    body: OfferSearchRequest
  }
): Observable<Array<OfferStub>> {

    return this.search$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OfferStub>>) => r.body as Array<OfferStub>)
    );
  }

  /**
   * Path part for operation suggestConstraints
   */
  static readonly SuggestConstraintsPath = '/api/offers/constraint-suggestions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestConstraints()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  suggestConstraints$Response(params: {
    context?: HttpContext
    body: PriceAndAreaStatsRequest
  }
): Observable<StrictHttpResponse<PriceAndAreaStats>> {

    const rb = new RequestBuilder(this.rootUrl, OfferEndpointService.SuggestConstraintsPath, 'post');
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
        return r as StrictHttpResponse<PriceAndAreaStats>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `suggestConstraints$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  suggestConstraints(params: {
    context?: HttpContext
    body: PriceAndAreaStatsRequest
  }
): Observable<PriceAndAreaStats> {

    return this.suggestConstraints$Response(params).pipe(
      map((r: StrictHttpResponse<PriceAndAreaStats>) => r.body as PriceAndAreaStats)
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

    const rb = new RequestBuilder(this.rootUrl, OfferEndpointService.GetOfferPath, 'get');
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
