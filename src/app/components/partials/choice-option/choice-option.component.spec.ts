import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceOptionComponent } from './choice-option.component';

describe('ChoiceOptionComponent', () => {
  let component: ChoiceOptionComponent;
  let fixture: ComponentFixture<ChoiceOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
