import { Component, OnInit, ApplicationRef } from '@angular/core';

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
    // 开始初始化
    await Core.setup({
      surveyId: query.sid,  // 问卷id必须提供
      indexUrl: location.href, // 首页地址必须提供
      rewardUrl: location.origin + '/reward?sid=' + query.sid, // 奖励页面地址必须提供
      error: (message) => {  // 提供显示错误消息的方法
        window.alert(message);
      },
      notify: (message) => { // 提供显示提示消息的方法
        this.notification = message;
        clearTimeout(notifyId);
        notifyId = window.setTimeout(() => {
          this.notification = '';
          this.app.tick();
        }, 2000);
      },
      setter: (obj, props) => { // 提供设置属性的方法
        Object.assign(obj, props);
        // 我们在设置完属性后调用一下tick启动脏检测,使得UI能够及时更新.
        this.app.tick();
      }
    });
    // 等待初始化完整后我们获取首页数据,并在模板中渲染处理
    this.introduction = await Core.fetchIntro();
  }

  async start() {
    // 点击开始按钮后我们获取题目数据并在模板中渲染出来
    this.questions = await Core.fetchQuestions();
  }

}
