import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewToolComponent } from './preview-tool.component';

describe('PreviewToolComponent', () => {
  let component: PreviewToolComponent;
  let fixture: ComponentFixture<PreviewToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
