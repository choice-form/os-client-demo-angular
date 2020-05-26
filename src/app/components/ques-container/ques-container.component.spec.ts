import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesContainerComponent } from './ques-container.component';

describe('QuesContainerComponent', () => {
  let component: QuesContainerComponent;
  let fixture: ComponentFixture<QuesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
