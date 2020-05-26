import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceNodeComponent } from './choice-node.component';

describe('ChoiceNodeComponent', () => {
  let component: ChoiceNodeComponent;
  let fixture: ComponentFixture<ChoiceNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
