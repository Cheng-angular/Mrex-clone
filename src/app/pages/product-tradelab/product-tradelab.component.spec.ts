import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTradelabComponent } from './product-tradelab.component';

describe('ProductTradelabComponent', () => {
  let component: ProductTradelabComponent;
  let fixture: ComponentFixture<ProductTradelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTradelabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTradelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
