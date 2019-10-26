import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPharmsComponent } from './about-pharms.component';

describe('AboutPharmsComponent', () => {
  let component: AboutPharmsComponent;
  let fixture: ComponentFixture<AboutPharmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPharmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPharmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
