import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMentorComponent } from './profil-mentor.component';

describe('ProfilMentorComponent', () => {
  let component: ProfilMentorComponent;
  let fixture: ComponentFixture<ProfilMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilMentorComponent]
    });
    fixture = TestBed.createComponent(ProfilMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
