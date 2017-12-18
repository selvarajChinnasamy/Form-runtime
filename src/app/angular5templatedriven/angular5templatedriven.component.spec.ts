import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular5templatedrivenComponent } from './angular5templatedriven.component';

describe('Angular5templatedrivenComponent', () => {
  let component: Angular5templatedrivenComponent;
  let fixture: ComponentFixture<Angular5templatedrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular5templatedrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular5templatedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
