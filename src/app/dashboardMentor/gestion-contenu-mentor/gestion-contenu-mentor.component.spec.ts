import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContenuMentorComponent } from './gestion-contenu-mentor.component';

describe('GestionContenuMentorComponent', () => {
  let component: GestionContenuMentorComponent;
  let fixture: ComponentFixture<GestionContenuMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionContenuMentorComponent]
    });
    fixture = TestBed.createComponent(GestionContenuMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
