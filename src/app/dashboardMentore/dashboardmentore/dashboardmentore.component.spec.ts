import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmentoreComponent } from './dashboardmentore.component';

describe('DashboardmentoreComponent', () => {
  let component: DashboardmentoreComponent;
  let fixture: ComponentFixture<DashboardmentoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardmentoreComponent]
    });
    fixture = TestBed.createComponent(DashboardmentoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
