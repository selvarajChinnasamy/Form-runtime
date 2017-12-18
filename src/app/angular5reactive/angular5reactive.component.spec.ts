import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular5reactiveComponent } from './angular5reactive.component';

describe('Angular5reactiveComponent', () => {
  let component: Angular5reactiveComponent;
  let fixture: ComponentFixture<Angular5reactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular5reactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular5reactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
