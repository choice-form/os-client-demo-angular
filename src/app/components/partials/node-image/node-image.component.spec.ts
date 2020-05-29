import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeImageComponent } from './node-image.component';

describe('NodeImageComponent', () => {
  let component: NodeImageComponent;
  let fixture: ComponentFixture<NodeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
