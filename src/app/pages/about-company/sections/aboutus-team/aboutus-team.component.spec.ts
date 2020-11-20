import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusTeamComponent } from './aboutus-team.component';

describe('AboutusTeamComponent', () => {
  let component: AboutusTeamComponent;
  let fixture: ComponentFixture<AboutusTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
