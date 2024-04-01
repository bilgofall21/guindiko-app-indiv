import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcontenuComponent } from './detailcontenu.component';

describe('DetailcontenuComponent', () => {
  let component: DetailcontenuComponent;
  let fixture: ComponentFixture<DetailcontenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcontenuComponent]
    });
    fixture = TestBed.createComponent(DetailcontenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
