import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDarkSectionComponent } from './term-dark-section.component';

describe('TermDarkSectionComponent', () => {
  let component: TermDarkSectionComponent;
  let fixture: ComponentFixture<TermDarkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermDarkSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDarkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
