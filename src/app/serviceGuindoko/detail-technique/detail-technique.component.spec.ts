import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTechniqueComponent } from './detail-technique.component';

describe('DetailTechniqueComponent', () => {
  let component: DetailTechniqueComponent;
  let fixture: ComponentFixture<DetailTechniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTechniqueComponent]
    });
    fixture = TestBed.createComponent(DetailTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
