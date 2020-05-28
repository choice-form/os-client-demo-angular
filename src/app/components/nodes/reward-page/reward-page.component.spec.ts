import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPageComponent } from './reward-page.component';

describe('RewardPageComponent', () => {
  let component: RewardPageComponent;
  let fixture: ComponentFixture<RewardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
