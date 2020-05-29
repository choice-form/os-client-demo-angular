import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionIconComponent } from './option-icon.component';

describe('OptionIconComponent', () => {
  let component: OptionIconComponent;
  let fixture: ComponentFixture<OptionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
