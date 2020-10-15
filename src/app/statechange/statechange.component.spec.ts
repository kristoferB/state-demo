import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatechangeComponent } from './statechange.component';

describe('StatechangeComponent', () => {
  let component: StatechangeComponent;
  let fixture: ComponentFixture<StatechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatechangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
