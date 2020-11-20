import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermZeroSectionComponent } from './term-zero-section.component';

describe('TermZeroSectionComponent', () => {
  let component: TermZeroSectionComponent;
  let fixture: ComponentFixture<TermZeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermZeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermZeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
