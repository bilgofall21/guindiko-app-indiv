import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGestionManagementComponent } from './detail-gestion-management.component';

describe('DetailGestionManagementComponent', () => {
  let component: DetailGestionManagementComponent;
  let fixture: ComponentFixture<DetailGestionManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailGestionManagementComponent]
    });
    fixture = TestBed.createComponent(DetailGestionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
