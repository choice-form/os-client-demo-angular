import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Core, EventHub } from '@choiceform/os-client-core';
@Component({
  selector: 'app-route-themes',
  templateUrl: './route-themes.component.html',
  styleUrls: ['./route-themes.component.scss']
})
export class RouteThemesComponent implements OnInit {
  model: CFRealtime;
  noViewNode: CFQuestion;
  constructor(appRef: ApplicationRef) {
    Core.initRealtimePreview();
    this.model = Core.realtime;
    // 实时预览的是由编辑器的动作触发的,angular不能感知,所以通知一下
    EventHub.on('REALTIME_CHANGE', () => {
      appRef.tick();
    });
  }
  /**
   * 是否预览普通节点
   */
  isNode() {
    return !this.model.data.isGift && !this.model.data.isStart;
  }
  /**
   * 更新无视图节点
   */
  updateViewNode() {
    const { nodes } = this.model.data;
    if (nodes) {
      const node = nodes[0];
      if (node && node.noView) {
        this.noViewNode = node;
        return true;
      }
    }
    this.noViewNode = undefined;
    return false;
  }
  ngOnInit(): void {
  }

}
