import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-image',
  templateUrl: './node-image.component.html',
  styleUrls: ['./node-image.component.scss']
})
export class NodeImageComponent implements OnInit {
  @Input() node: CFQuestion;
  get images(){
    return (this.node as CFChoiceQuestion).images;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
