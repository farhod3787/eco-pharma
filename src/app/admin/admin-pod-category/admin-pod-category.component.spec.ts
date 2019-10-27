import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPodCategoryComponent } from './admin-pod-category.component';

describe('AdminPodCategoryComponent', () => {
  let component: AdminPodCategoryComponent;
  let fixture: ComponentFixture<AdminPodCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPodCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
