import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPharmComponent } from './import-pharm.component';

describe('ImportPharmComponent', () => {
  let component: ImportPharmComponent;
  let fixture: ComponentFixture<ImportPharmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportPharmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
