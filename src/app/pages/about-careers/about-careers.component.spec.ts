import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCareersComponent } from './about-careers.component';

describe('AboutCareersComponent', () => {
  let component: AboutCareersComponent;
  let fixture: ComponentFixture<AboutCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCareersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
