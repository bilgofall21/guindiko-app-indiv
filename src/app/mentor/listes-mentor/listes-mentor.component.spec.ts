import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesMentorComponent } from './listes-mentor.component';

describe('ListesMentorComponent', () => {
  let component: ListesMentorComponent;
  let fixture: ComponentFixture<ListesMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesMentorComponent]
    });
    fixture = TestBed.createComponent(ListesMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
