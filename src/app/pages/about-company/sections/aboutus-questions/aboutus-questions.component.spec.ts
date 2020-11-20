import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusQuestionsComponent } from './aboutus-questions.component';

describe('AboutusQuestionsComponent', () => {
  let component: AboutusQuestionsComponent;
  let fixture: ComponentFixture<AboutusQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
