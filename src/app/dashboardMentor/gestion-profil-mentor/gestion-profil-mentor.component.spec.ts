import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfilMentorComponent } from './gestion-profil-mentor.component';

describe('GestionProfilMentorComponent', () => {
  let component: GestionProfilMentorComponent;
  let fixture: ComponentFixture<GestionProfilMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfilMentorComponent]
    });
    fixture = TestBed.createComponent(GestionProfilMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
