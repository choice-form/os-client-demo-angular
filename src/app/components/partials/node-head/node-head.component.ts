import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-head',
  templateUrl: './node-head.component.html',
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent implements OnInit {
  @Input() node: CFQuestion;
  @Input() theme: CFTheme;
  constructor() { }

  ngOnInit(): void {
  }

}
