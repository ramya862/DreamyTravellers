import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesdetailsComponent } from './placesdetails.component';

describe('PlacesdetailsComponent', () => {
  let component: PlacesdetailsComponent;
  let fixture: ComponentFixture<PlacesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesdetailsComponent]
    });
    fixture = TestBed.createComponent(PlacesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
