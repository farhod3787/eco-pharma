import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPharmsComponent } from './admin-pharms.component';

describe('AdminPharmsComponent', () => {
  let component: AdminPharmsComponent;
  let fixture: ComponentFixture<AdminPharmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPharmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPharmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
