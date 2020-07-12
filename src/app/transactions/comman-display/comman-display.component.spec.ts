import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanDisplayComponent } from './comman-display.component';

describe('CommanDisplayComponent', () => {
  let component: CommanDisplayComponent;
  let fixture: ComponentFixture<CommanDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
