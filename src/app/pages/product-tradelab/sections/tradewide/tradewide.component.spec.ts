import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradewideComponent } from './tradewide.component';

describe('TradewideComponent', () => {
  let component: TradewideComponent;
  let fixture: ComponentFixture<TradewideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradewideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradewideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
