import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermHeroSectionComponent } from './term-hero-section.component';

describe('TermHeroSectionComponent', () => {
  let component: TermHeroSectionComponent;
  let fixture: ComponentFixture<TermHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
