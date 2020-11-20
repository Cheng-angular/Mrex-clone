import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermMainSectionComponent } from './term-main-section.component';

describe('TermMainSectionComponent', () => {
  let component: TermMainSectionComponent;
  let fixture: ComponentFixture<TermMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermMainSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
