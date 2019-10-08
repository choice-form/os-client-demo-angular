import { Component, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';

const { Core, Util } = window.CFClient;


@Component({
  selector: 'app-route-main',
  templateUrl: './route-main.component.html',
  styleUrls: ['./route-main.component.less']
})
export class RouteMainComponent implements OnInit {
  introduction: CFIntro;
  questions: CFState;
  notification: string;
  constructor(private app: ApplicationRef) { }

  async ngOnInit() {
    const query = Util.queryStringToObj();

    let notifyId = -1;
    await Core.setup({
      surveyId: query.sid,
      indexUrl: location.href,
      rewardUrl: location.origin + '/reward?sid=' + query.sid,
      error: (message) => { },
      notify: (message) => {
        this.notification = message;
        clearTimeout(notifyId);
        notifyId = window.setTimeout(() => {
          this.notification = '';
          this.app.tick();
        }, 2000);
      },
      locateError: () => { },
      translate: window.CFI18n.translate,
      setLocale: window.CFI18n.setLocale,
      setter: (obj, props) => {
        Object.assign(obj, props);
        this.app.tick();
      }
    });
    this.introduction = await Core.fetchIntro();
  }

  async start() {
    this.questions = await Core.fetchQuestions();
    console.log(this.questions);
  }

}
