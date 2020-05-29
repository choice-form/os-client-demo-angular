import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeHeadComponent } from './node-head.component';

describe('NodeHeadComponent', () => {
  let component: NodeHeadComponent;
  let fixture: ComponentFixture<NodeHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
