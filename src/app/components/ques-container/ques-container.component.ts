import { Component, OnInit, Input } from '@angular/core';

/**
 * 问题页面渲染参数
 */
interface IQuestionsRenderData {
  /**
   * 事件回调处理器
   */
  handleEvents: CFUIEventHandler;
  /**
   * 下一题按钮文字
   */
  nextButton: string;
  /**
   * 节点列表
   */
  nodes: CFQuestion[];
  /**
   * 上一题按钮文字
   */
  prevButton: string;
  /**
   * 主题
   */
  theme: CFTheme;
}

@Component({
  selector: 'app-ques-container',
  templateUrl: './ques-container.component.html',
  styleUrls: ['./ques-container.component.scss']
})
export class QuesContainerComponent implements OnInit {
  @Input() model: IQuestionsRenderData;
  constructor() { }

  ngOnInit(): void {
  }

}
