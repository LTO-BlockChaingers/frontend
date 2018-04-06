import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecontractsComponent } from './livecontracts.component';

describe('LivecontractsComponent', () => {
  let component: LivecontractsComponent;
  let fixture: ComponentFixture<LivecontractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivecontractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
