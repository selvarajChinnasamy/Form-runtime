import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRuntimeComponent } from './form-runtime.component';

describe('FormRuntimeComponent', () => {
  let component: FormRuntimeComponent;
  let fixture: ComponentFixture<FormRuntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRuntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRuntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
