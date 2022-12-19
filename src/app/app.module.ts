import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {LeafletDrawModule} from "@asymmetrik/ngx-leaflet-draw";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FeatureNamePipe} from "../pipes/feature-name.pipe";
import {NgxLeafletFullscreenModule} from "@runette/ngx-leaflet-fullscreen";
import {NgxLeafletLocateModule} from "@runette/ngx-leaflet-locate";
import { AppNominatimSearchBoxComponent } from './components/app-nominatim-search-box/app-nominatim-search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureNamePipe,
    AppNominatimSearchBoxComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LeafletModule,
        LeafletDrawModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxLeafletFullscreenModule,
        NgxLeafletLocateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
