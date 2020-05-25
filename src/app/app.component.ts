import { Component } from '@angular/core';
import { Core } from '@choiceform/os-client-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'os-client-demo-angular';
  notifications: { id: number, text: string }[] = [];
  error = '';
  notifySuspended: boolean;
  initialized: boolean;
  constructor() {
    console.log('initializing');
    Core.setup({
      dynamic: false,
      clientName: 'Angular Demo',
      useWxSdk: true,
      error: (e) => this.showError(e),
      notify: (e) => this.notify(e),
      locateError: (e) => this.locateError(e),
      setLocale: (e) => this.setLocale(e),
      suspendNotify: () => this.suspendNotify(),
      resumeNotify: () => this.resumeNotify(),
    }).then(() => {
      console.log('initialized');
      this.initialized = true;
    });
  }
  /**
   * 显示提示消息
   * @param message 消息
   */
  notify(message: string) {
    const item = { id: Math.random(), text: message };
    this.notifications.push(item);
    setTimeout(() => {
      this.notifications = this.notifications.filter(temp => temp.id !== item.id);
    }, 2000);
  }
  /**
   * 显示错误消息
   * @param error 错误消息
   */
  showError(error: string) {
    this.error = error;
  }
  /**
   * 定位错误
   */
  locateError(e: CFValidateResult) {
    const { dueToNode } = e;
    if (dueToNode) {
      const element = document.getElementById(dueToNode.renderId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  /**
   * 将提示信息挂起,直到恢复之前,任何提示信息都不会被显示出来.
   */
  suspendNotify(): void {
    this.notifySuspended = true;
  }
  /**
   * 将提示消息从挂起状态中恢复过来,之后的提示消息会恢复显示
   */
  resumeNotify(): void {
    this.notifySuspended = false;
  }
  /**
   * 切换语言
   * @param locale 语言代号
   */
  setLocale(locale: string): void {
    // setLocale(locale);
  }
}
