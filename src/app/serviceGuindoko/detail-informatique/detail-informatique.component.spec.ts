import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInformatiqueComponent } from './detail-informatique.component';

describe('DetailInformatiqueComponent', () => {
  let component: DetailInformatiqueComponent;
  let fixture: ComponentFixture<DetailInformatiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailInformatiqueComponent]
    });
    fixture = TestBed.createComponent(DetailInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
