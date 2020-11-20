import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusContactsComponent } from './aboutus-contacts.component';

describe('AboutusContactsComponent', () => {
  let component: AboutusContactsComponent;
  let fixture: ComponentFixture<AboutusContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
