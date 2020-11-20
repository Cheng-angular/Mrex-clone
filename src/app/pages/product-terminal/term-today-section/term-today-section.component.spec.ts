import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermTodaySectionComponent } from './term-today-section.component';

describe('TermTodaySectionComponent', () => {
  let component: TermTodaySectionComponent;
  let fixture: ComponentFixture<TermTodaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermTodaySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermTodaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
