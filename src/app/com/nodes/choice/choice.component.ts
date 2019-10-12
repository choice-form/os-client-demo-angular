import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nodes-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.less']
})
export class ChoiceComponent implements OnInit {
  @Input() node: CFSubjectQuestion;
  @Input() eventHandler: CFUIEventHandler;
  constructor() { }
  ngOnInit() { }
  clickOption(option: CFOption) {
    // 当选项被点击是我们调用的回调函数通知核心模块
    this.eventHandler.handleOptionClick(option, this.node);
  }
}
