import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRetseptTrueComponent } from './admin-retsept-true.component';

describe('AdminRetseptTrueComponent', () => {
  let component: AdminRetseptTrueComponent;
  let fixture: ComponentFixture<AdminRetseptTrueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRetseptTrueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRetseptTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
