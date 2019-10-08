import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nodes-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.less']
})
export class ChoiceComponent implements OnInit {
  @Input() node: CFSubjectQuestion;
  @Input() eventHandler: CFUIEventHander;
  constructor() { }
  ngOnInit() { }
  clickOption(option: CFOption) {
    this.eventHandler.handleOptionClick(option, this.node);
  }
}
