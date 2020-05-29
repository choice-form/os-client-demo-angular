import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeVideoComponent } from './node-video.component';

describe('NodeVideoComponent', () => {
  let component: NodeVideoComponent;
  let fixture: ComponentFixture<NodeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
