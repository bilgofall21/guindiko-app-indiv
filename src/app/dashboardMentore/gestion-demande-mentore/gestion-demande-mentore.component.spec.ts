import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDemandeMentoreComponent } from './gestion-demande-mentore.component';

describe('GestionDemandeMentoreComponent', () => {
  let component: GestionDemandeMentoreComponent;
  let fixture: ComponentFixture<GestionDemandeMentoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDemandeMentoreComponent]
    });
    fixture = TestBed.createComponent(GestionDemandeMentoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
