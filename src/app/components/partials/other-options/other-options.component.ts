import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-options',
  templateUrl: './other-options.component.html',
  styleUrls: ['./other-options.component.scss']
})
export class OtherOptionsComponent implements OnInit {
  @Input() node: CFSubjectQuestion;
  @Input() theme: CFTheme;
  @Input() handler: CFUIEventHandler;
  constructor() { }

  ngOnInit(): void {
  }

}
