import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmsComponent } from './pharms.component';

describe('PharmsComponent', () => {
  let component: PharmsComponent;
  let fixture: ComponentFixture<PharmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
