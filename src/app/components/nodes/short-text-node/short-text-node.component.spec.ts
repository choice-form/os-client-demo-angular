import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTextNodeComponent } from './short-text-node.component';

describe('ShortTextNodeComponent', () => {
  let component: ShortTextNodeComponent;
  let fixture: ComponentFixture<ShortTextNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTextNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTextNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
