import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-body',
  templateUrl: './node-body.component.html',
  styleUrls: ['./node-body.component.scss']
})
export class NodeBodyComponent implements OnInit {
  @Input() theme: CFTheme;
  constructor() { }

  ngOnInit(): void {
  }

}
