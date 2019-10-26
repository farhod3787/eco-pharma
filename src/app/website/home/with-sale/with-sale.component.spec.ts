import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSaleComponent } from './with-sale.component';

describe('WithSaleComponent', () => {
  let component: WithSaleComponent;
  let fixture: ComponentFixture<WithSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
