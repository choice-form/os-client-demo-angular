import { Component, OnInit } from '@angular/core';

const { Core, Util } = window.CFClient;


@Component({
  selector: 'app-route-main',
  templateUrl: './route-main.component.html',
  styleUrls: ['./route-main.component.less']
})
export class RouteMainComponent implements OnInit {
  introduction: CFIntro;
  questions: CFState;
  constructor() { }

  ngOnInit() {

    const query = Util.queryStringToObj();
    Core.setup({
      surveyId: query.sid,
      indexUrl: location.href,
      rewardUrl: location.orign + '/reward?sid=' + query.sid,
      error: (message) => { },
      notify: (message) => { },
      locateError: () => { },
      translate

    });
  }

}
