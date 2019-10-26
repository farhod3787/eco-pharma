import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDoingComponent } from './orders-doing.component';

describe('OrdersDoingComponent', () => {
  let component: OrdersDoingComponent;
  let fixture: ComponentFixture<OrdersDoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
