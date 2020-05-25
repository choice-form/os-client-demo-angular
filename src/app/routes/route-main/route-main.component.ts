import { Component, OnInit } from '@angular/core';
import { Core } from '@choiceform/os-client-core';

@Component({
  selector: 'app-route-main',
  templateUrl: './route-main.component.html',
  styleUrls: ['./route-main.component.scss']
})
export class RouteMainComponent {
  startState: CFStartState;
  constructor() {
    Core.fetchStartState(() => { })
      .then((state) => {
        this.startState = state;
      });
  }
}
