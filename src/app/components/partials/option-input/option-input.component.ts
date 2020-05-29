import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-input',
  templateUrl: './option-input.component.html',
  styleUrls: ['./option-input.component.scss']
})
export class OptionInputComponent implements OnInit {
  @Input() option: CFValidateOpt;
  @Input() theme: CFTheme;
  @Output() handleChange = new EventEmitter<string>();
  @Output() handleTrigger = new EventEmitter<string>();

  handleDropdownChange(value: string) {
    const values = String(this.option.value).split(',');
    let newList = [...values];
    if (!values.includes(value)) {
      newList.push(value);
    } else {
      newList = newList.filter(i => i !== value);
    }
    this.handleChange.emit(newList.join());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
