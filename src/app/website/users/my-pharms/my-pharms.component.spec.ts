import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPharmsComponent } from './my-pharms.component';

describe('MyPharmsComponent', () => {
  let component: MyPharmsComponent;
  let fixture: ComponentFixture<MyPharmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPharmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPharmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
