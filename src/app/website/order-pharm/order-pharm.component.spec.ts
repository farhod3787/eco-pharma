import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPharmComponent } from './order-pharm.component';

describe('OrderPharmComponent', () => {
  let component: OrderPharmComponent;
  let fixture: ComponentFixture<OrderPharmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPharmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
