import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPharmComponent } from './admin-add-pharm.component';

describe('AdminAddPharmComponent', () => {
  let component: AdminAddPharmComponent;
  let fixture: ComponentFixture<AdminAddPharmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPharmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
