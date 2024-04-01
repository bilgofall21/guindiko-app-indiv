import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtComponent } from './detail-art.component';

describe('DetailArtComponent', () => {
  let component: DetailArtComponent;
  let fixture: ComponentFixture<DetailArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailArtComponent]
    });
    fixture = TestBed.createComponent(DetailArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
