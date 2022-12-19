/// <reference types='@runette/leaflet-fullscreen' />
import { Component } from '@angular/core';
import {
  Control,
  featureGroup,
  FeatureGroup,
  latLng,
  MapOptions,
  tileLayer,
  FullscreenOptions,
  Map as LMap, LocationEvent, DomUtil
} from "leaflet";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {LeafletDrawDirective} from "@asymmetrik/ngx-leaflet-draw";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprutly-ng';

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

    let Custom = Control.extend({
      onAdd(map: LMap) {
        return DomUtil.create('app-nominatim-search-box');
      },
      onRemove(map: LMap) {}
    });

    new Custom({
      position: 'topleft'
    }).addTo(map);
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

  onNewLocation(locationEvent: LocationEvent) {
    //this.map?.setView(locationEvent.latlng, 13)
  }

  mapClick() {
    if (!this.map?.isFullscreen()) {
      this.map?.toggleFullscreen()
    }
  }

  clearDraw() {
    this.drawnItems.clearLayers()
  }
}
