import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {LeafletDrawModule} from "@asymmetrik/ngx-leaflet-draw";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FeatureNamePipe} from "../pipes/feature-name.pipe";
import {NgxLeafletFullscreenModule} from "@runette/ngx-leaflet-fullscreen";
import {NgxLeafletLocateModule} from "@runette/ngx-leaflet-locate";
import { GeoMapComponent } from './components/geo-map/geo-map.component';
import { RouterOutlet} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import { ConstraintPanelComponent } from './components/constraint-panel/constraint-panel.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {ApiModule} from "../api/api.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FeatureNamePipe,
    GeoMapComponent,
    MainComponent,
    ConstraintPanelComponent
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
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
    NgxLeafletLocateModule,
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    ApiModule.forRoot({
        rootUrl: ""
      }
    ),
    MatCheckboxModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
