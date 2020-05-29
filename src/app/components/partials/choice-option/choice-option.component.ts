import { Component, OnInit, Input, EventEmitter, Output, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-choice-option',
  templateUrl: './choice-option.component.html',
  styleUrls: ['./choice-option.component.scss']
})
export class ChoiceOptionComponent implements OnInit {
  @Input() option: CFOption;
  @Input() handler: CFUIEventHandler;
  @Input() theme: CFTheme;
  @Input() type: 'radio' | 'checkbox';
  @Output() handleChange = new EventEmitter<string>();
  @Output() handleClick = new EventEmitter();
  @Output() handleTrigger = new EventEmitter<string>();

  get proxyOption() {
    return this.option as CFIconOption & CFPictureChoiceOption;
  }
  constructor() {
  }
  needInput() {
    return this.option.selected && this.option.inputType === 'select-input';
  }
  ngOnInit(): void {

  }

}
