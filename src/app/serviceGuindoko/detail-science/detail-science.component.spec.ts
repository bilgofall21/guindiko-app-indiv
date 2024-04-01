import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScienceComponent } from './detail-science.component';

describe('DetailScienceComponent', () => {
  let component: DetailScienceComponent;
  let fixture: ComponentFixture<DetailScienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailScienceComponent]
    });
    fixture = TestBed.createComponent(DetailScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
