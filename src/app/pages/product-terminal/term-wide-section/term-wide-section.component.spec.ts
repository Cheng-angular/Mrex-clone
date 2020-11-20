import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermWideSectionComponent } from './term-wide-section.component';

describe('TermWideSectionComponent', () => {
  let component: TermWideSectionComponent;
  let fixture: ComponentFixture<TermWideSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermWideSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermWideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
