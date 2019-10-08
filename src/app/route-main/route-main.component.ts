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
  stage: 'intro' | 'ques' = 'intro';
  constructor() { }

  async ngOnInit() {
    const query = Util.queryStringToObj();
    await Core.setup({
      surveyId: query.sid,
      indexUrl: location.href,
      rewardUrl: location.origin + '/reward?sid=' + query.sid,
      error: (message) => { },
      notify: (message) => { },
      locateError: () => { },
      translate: window.CFI18n.translate,
      setLocale: window.CFI18n.setLocale,
      setter: (obj, props) => {
        Object.assign(obj, props);
      }
    });
    this.introduction = await Core.fetchIntro();
  }

  async start() {
    this.questions = await Core.fetchQuestions();
  }
}
