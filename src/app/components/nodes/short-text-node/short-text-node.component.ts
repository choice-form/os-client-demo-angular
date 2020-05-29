import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-text-node',
  templateUrl: './short-text-node.component.html',
  styleUrls: ['./short-text-node.component.scss']
})
export class ShortTextNodeComponent implements OnInit {
  @Input() node: CFShortTextQuestion;
  @Input() handler: CFUIEventHandler;
  @Input() theme: CFTheme;
  constructor() { }

  ngOnInit(): void {
  }

}
