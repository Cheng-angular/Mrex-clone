import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMessageComponent } from './product-message.component';

describe('ProductMessageComponent', () => {
  let component: ProductMessageComponent;
  let fixture: ComponentFixture<ProductMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
