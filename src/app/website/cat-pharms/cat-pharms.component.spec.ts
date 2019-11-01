import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPharmsComponent } from './cat-pharms.component';

describe('CatPharmsComponent', () => {
  let component: CatPharmsComponent;
  let fixture: ComponentFixture<CatPharmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatPharmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPharmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
