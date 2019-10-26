import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmServiceComponent } from './pharm-service.component';

describe('PharmServiceComponent', () => {
  let component: PharmServiceComponent;
  let fixture: ComponentFixture<PharmServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
