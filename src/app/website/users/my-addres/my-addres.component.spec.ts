import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddresComponent } from './my-addres.component';

describe('MyAddresComponent', () => {
  let component: MyAddresComponent;
  let fixture: ComponentFixture<MyAddresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAddresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
