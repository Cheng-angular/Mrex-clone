import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusHeroComponent } from './aboutus-hero.component';

describe('AboutusHeroComponent', () => {
  let component: AboutusHeroComponent;
  let fixture: ComponentFixture<AboutusHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
