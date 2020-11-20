import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTerminalComponent } from './product-terminal.component';

describe('ProductTerminalComponent', () => {
  let component: ProductTerminalComponent;
  let fixture: ComponentFixture<ProductTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
