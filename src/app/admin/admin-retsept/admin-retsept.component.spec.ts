import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRetseptComponent } from './admin-retsept.component';

describe('AdminRetseptComponent', () => {
  let component: AdminRetseptComponent;
  let fixture: ComponentFixture<AdminRetseptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRetseptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRetseptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
