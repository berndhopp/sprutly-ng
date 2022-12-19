import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-nominatim-search-box',
  templateUrl: './app-nominatim-search-box.component.html',
  styleUrls: ['./app-nominatim-search-box.component.css']
})
export class AppNominatimSearchBoxComponent implements OnInit{

  constructor(private http: HttpClient) {
  }

  nominatimMatches: any
  isLoading = false
  placeControl = new FormControl()
  errorMsg!: string
  minLengthTerm = 3

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
            .pipe(finalize(() => {
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
    //this.drawnItems.clearLayers()
  }
}
