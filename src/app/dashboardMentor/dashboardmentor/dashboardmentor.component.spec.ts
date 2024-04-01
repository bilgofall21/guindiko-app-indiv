import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmentorComponent } from './dashboardmentor.component';

describe('DashboardmentorComponent', () => {
  let component: DashboardmentorComponent;
  let fixture: ComponentFixture<DashboardmentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardmentorComponent]
    });
    fixture = TestBed.createComponent(DashboardmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
