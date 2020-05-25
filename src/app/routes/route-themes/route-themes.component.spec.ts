import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteThemesComponent } from './route-themes.component';

describe('RouteThemesComponent', () => {
  let component: RouteThemesComponent;
  let fixture: ComponentFixture<RouteThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
