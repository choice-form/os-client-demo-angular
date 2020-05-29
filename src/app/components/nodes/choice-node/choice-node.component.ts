import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choice-node',
  templateUrl: './choice-node.component.html',
  styleUrls: ['./choice-node.component.scss']
})
export class ChoiceNodeComponent implements OnInit {
  @Input() node: CFChoiceQuestion;
  @Input() handler: CFUIEventHandler;
  @Input() theme: CFTheme;
  constructor() { }

  ngOnInit(): void {
  }

}
