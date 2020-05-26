import { Component, OnInit } from '@angular/core';
import { Core } from '@choiceform/os-client-core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-main',
  templateUrl: './route-main.component.html',
  styleUrls: ['./route-main.component.scss']
})
export class RouteMainComponent {
  startState: CFStartState;
  constructor(private router: Router) {
    Core.fetchStartState((e) => {
      this.router.navigateByUrl(e.route.replace(/^\.\//, '/'));
    }).then((state) => {
      this.startState = state;
    });
  }
}
