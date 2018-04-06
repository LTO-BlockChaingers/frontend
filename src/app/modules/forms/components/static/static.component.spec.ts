import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticComponent } from './static.component';
import { STATIC_DEFINITION_MOCK } from '../../testing/mocks';

describe('StaticComponent', () => {
  let component: StaticComponent;
  let fixture: ComponentFixture<StaticComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StaticComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticComponent);
    component = fixture.componentInstance;
    component.definition = STATIC_DEFINITION_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
