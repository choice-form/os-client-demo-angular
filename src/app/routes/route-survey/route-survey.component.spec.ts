import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSurveyComponent } from './route-survey.component';

describe('RouteSurveyComponent', () => {
  let component: RouteSurveyComponent;
  let fixture: ComponentFixture<RouteSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
