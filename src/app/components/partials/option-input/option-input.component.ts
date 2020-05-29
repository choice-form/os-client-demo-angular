import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-option-input',
  templateUrl: './option-input.component.html',
  styleUrls: ['./option-input.component.scss']
})
export class OptionInputComponent implements OnInit {
  @Input() option: CFValidateOpt;
  @Input() theme: CFTheme;
  @Output() handleChange: (value: string) => void;
  @Output() handleTrigger: (value: string) => void;
  constructor() { }

  ngOnInit(): void {
  }

}
