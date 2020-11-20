import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintradeSectionComponent } from './maintrade-section.component';

describe('MaintradeSectionComponent', () => {
  let component: MaintradeSectionComponent;
  let fixture: ComponentFixture<MaintradeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintradeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintradeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
