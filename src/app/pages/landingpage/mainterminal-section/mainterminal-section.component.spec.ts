import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainterminalSectionComponent } from './mainterminal-section.component';

describe('MainterminalSectionComponent', () => {
  let component: MainterminalSectionComponent;
  let fixture: ComponentFixture<MainterminalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainterminalSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainterminalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
