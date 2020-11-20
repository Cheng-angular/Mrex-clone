import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchHeroComponent } from './research-hero.component';

describe('ResearchHeroComponent', () => {
  let component: ResearchHeroComponent;
  let fixture: ComponentFixture<ResearchHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
