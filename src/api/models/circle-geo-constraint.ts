/* tslint:disable */
/* eslint-disable */
import { GeoConstraint } from './geo-constraint';
export type CircleGeoConstraint = GeoConstraint & {
'latitude'?: number;
'longitude'?: number;
'radiusKiloMeters'?: number;
} & {
};
