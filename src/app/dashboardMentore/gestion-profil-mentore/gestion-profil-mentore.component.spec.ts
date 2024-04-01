import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfilMentoreComponent } from './gestion-profil-mentore.component';

describe('GestionProfilMentoreComponent', () => {
  let component: GestionProfilMentoreComponent;
  let fixture: ComponentFixture<GestionProfilMentoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfilMentoreComponent]
    });
    fixture = TestBed.createComponent(GestionProfilMentoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
