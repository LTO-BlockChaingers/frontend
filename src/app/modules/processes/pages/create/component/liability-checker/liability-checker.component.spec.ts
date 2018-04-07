import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityCheckerComponent } from './liability-checker.component';

describe('LiabilityCheckerComponent', () => {
  let component: LiabilityCheckerComponent;
  let fixture: ComponentFixture<LiabilityCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiabilityCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiabilityCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
