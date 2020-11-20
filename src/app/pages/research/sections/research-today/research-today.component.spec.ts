import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTodayComponent } from './research-today.component';

describe('ResearchTodayComponent', () => {
  let component: ResearchTodayComponent;
  let fixture: ComponentFixture<ResearchTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
