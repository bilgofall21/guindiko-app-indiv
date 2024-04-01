import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHotellerieComponent } from './detail-hotellerie.component';

describe('DetailHotellerieComponent', () => {
  let component: DetailHotellerieComponent;
  let fixture: ComponentFixture<DetailHotellerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailHotellerieComponent]
    });
    fixture = TestBed.createComponent(DetailHotellerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
