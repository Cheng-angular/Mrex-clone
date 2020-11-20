import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradezeroComponent } from './tradezero.component';

describe('TradezeroComponent', () => {
  let component: TradezeroComponent;
  let fixture: ComponentFixture<TradezeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradezeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradezeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
