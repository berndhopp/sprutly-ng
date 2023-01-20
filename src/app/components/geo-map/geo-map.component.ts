/// <reference types='@runette/leaflet-fullscreen' />
import {Component} from '@angular/core';
import {
  Control,
  featureGroup,
  FeatureGroup,
  latLng,
  MapOptions,
  tileLayer,
  FullscreenOptions,
  Map as LMap
} from "leaflet";
import {addGeocoder} from './add-geocoder'

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent {
  public locateOptions: Control.LocateOptions = {
    drawCircle: false,
    flyTo: false,
    keepCurrentZoomLevel: false,
    locateOptions: {
      enableHighAccuracy: true,
    },
    icon: 'material-icons md-18 target icon',
    position: 'topright'
  };

  drawnItems: FeatureGroup = featureGroup();

  public map?: LMap;

  onMapReady(map: LMap) {
    this.map = map
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
    },
    position: 'topright'
  };

  fullScreenOptions: FullscreenOptions = {
    position: 'topright'
  }

  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
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
