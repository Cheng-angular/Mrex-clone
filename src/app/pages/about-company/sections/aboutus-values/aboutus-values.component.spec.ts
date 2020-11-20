import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusValuesComponent } from './aboutus-values.component';

describe('AboutusValuesComponent', () => {
  let component: AboutusValuesComponent;
  let fixture: ComponentFixture<AboutusValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
