import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintPanelComponent } from './constraint-panel.component';

describe('ConstraintPanelComponent', () => {
  let component: ConstraintPanelComponent;
  let fixture: ComponentFixture<ConstraintPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstraintPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstraintPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
