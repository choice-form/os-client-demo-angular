import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoViewComponent } from './no-view.component';

describe('NoViewComponent', () => {
  let component: NoViewComponent;
  let fixture: ComponentFixture<NoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
