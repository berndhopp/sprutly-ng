import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNominatimSearchBoxComponent } from './app-nominatim-search-box.component';

describe('AppNominatimSearchBoxComponent', () => {
  let component: AppNominatimSearchBoxComponent;
  let fixture: ComponentFixture<AppNominatimSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNominatimSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNominatimSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
