import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRewardComponent } from './route-reward.component';

describe('RouteRewardComponent', () => {
  let component: RouteRewardComponent;
  let fixture: ComponentFixture<RouteRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
