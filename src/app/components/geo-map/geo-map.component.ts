/// <reference types='@runette/leaflet-fullscreen' />
import { Component, ViewChild } from '@angular/core';
import {
  Control,
  featureGroup,
  FeatureGroup,
  latLng,
  MapOptions,
  tileLayer,
  FullscreenOptions,
  Map as LMap, LocationEvent, DomUtil, geoJson
} from "leaflet";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {LeafletDrawDirective} from "@asymmetrik/ngx-leaflet-draw";
import { Feature, Geometry, GeometryCollection, Properties } from '@turf/turf';
import {addGeocoder} from './add-geocoder'

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent {
  public locateOptions:  Control.LocateOptions = {
    drawCircle: false,
    flyTo: false,
    keepCurrentZoomLevel: false,
    locateOptions: {
      enableHighAccuracy: true,
    },
    icon: 'material-icons md-18 target icon',
  };

  drawnItems: FeatureGroup = featureGroup();

  public map?: LMap;

  onMapReady(map: LMap) {
    this.map = map

    const me = this

    addGeocoder(map, this.drawnItems)
  }

  drawOptions: Control.DrawConstructorOptions = {
    edit: {
      featureGroup: this.drawnItems,
      edit: false,
      remove: false
    },
    draw: {
      polygon: {
        metric: true,
        maxPoints: 14,
        allowIntersection: false,
      },
      circle: {
        showRadius: true,
        metric: true
      },
      marker: false,
      rectangle: false,
      polyline: false,
      circlemarker: false,

    }
  };

  fullScreenOptions: FullscreenOptions = {
    position: 'topleft'
  }

  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(52, 13)
  }

  onDrawCreated(e: any) {
    this.drawnItems.addLayer((e as any).layer);
  }

  clearDraw() {
    this.drawnItems.clearLayers()
  }
}
