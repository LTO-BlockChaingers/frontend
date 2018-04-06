import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mvp1Component } from './mvp1.component';

describe('Mvp1Component', () => {
  let component: Mvp1Component;
  let fixture: ComponentFixture<Mvp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mvp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mvp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
