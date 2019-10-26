import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShouldComponent } from './my-should.component';

describe('MyShouldComponent', () => {
  let component: MyShouldComponent;
  let fixture: ComponentFixture<MyShouldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShouldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
