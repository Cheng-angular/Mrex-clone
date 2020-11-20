import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusOVerviewComponent } from './aboutus-overview.component';

describe('AboutusOVerviewComponent', () => {
  let component: AboutusOVerviewComponent;
  let fixture: ComponentFixture<AboutusOVerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusOVerviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusOVerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
