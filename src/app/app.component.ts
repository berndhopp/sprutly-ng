import { Component } from '@angular/core';
import {
  Control,
  DivOverlay,
  featureGroup,
  FeatureGroup,
  latLng,
  Layer,
  MapOptions,
  tileLayer,
  Map as LMap, DomUtil
} from "leaflet";
import {FormControl} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Feature} from "@turf/turf";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

class ctl extends Control {
  constructor() {
    super({
      position: "topright"
    });
  }

  override addTo(map: LMap) : any {
    let img = DomUtil.create("div")

    img.innerText = "hallo welt"
    return img
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprutly-ng';

  constructor(private http: HttpClient) {
  }

  drawnItems: FeatureGroup = featureGroup();

  drawOptions: Control.DrawConstructorOptions = {
    edit: {
      featureGroup: this.drawnItems
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
      circlemarker: false
    }
  };

  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(52, 13)
  }

  nominatimMatches: any
  isLoading = false
  placeControl = new FormControl()
  errorMsg!: string
  minLengthTerm = 3

  onDrawCreated(e: any) {
    this.drawnItems.addLayer((e as any).layer);
  }

  ngOnInit(): void {
    this.placeControl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.nominatimMatches = [];
          this.isLoading = true;
        }),
        switchMap(value => {
          let responseMapper = (response: any) => {
            return response
              .features
              .filter((feature: any) => {
                switch ((feature.properties as any)?.category) {
                  case 'place':
                  case 'boundary':
                    return true
                  default:
                    return false
                }
              })
              .filter((value: any, index: number, self: any[]) => {
                return index == self
                  .findIndex(a => a.properties.display_name === value.properties.display_name)
              })
          };

          const nominatimParams = new HttpParams({
            fromObject: {
              format: 'geojson',
              polygon_geojson: 1
            }
          });

          return this.http.get('https://nominatim.openstreetmap.org/search', {
            params: nominatimParams.set('q', value)
          })
            .pipe(map(responseMapper))
            .pipe(
              finalize(() => {
                this.isLoading = false
              }),
            )
        })
      )
      .subscribe((features: any[]) => {
        this.nominatimMatches = features;
      });
  }

  optionSelected(option: MatAutocompleteSelectedEvent) {
    this.drawnItems.clearLayers()

  }
}
