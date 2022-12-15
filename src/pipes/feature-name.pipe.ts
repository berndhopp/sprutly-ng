import { Pipe, PipeTransform } from '@angular/core';
import {Feature} from "@turf/turf";

@Pipe({
  name: 'featureName'
})
export class FeatureNamePipe implements PipeTransform {
  transform(place: Feature, ...args: unknown[]): unknown {
    let props = place.properties as any

    let parts = (props.display_name as string).split(',');

    return parts[0] + ', ' + parts[1]
  }
}
