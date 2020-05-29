import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-video',
  templateUrl: './node-video.component.html',
  styleUrls: ['./node-video.component.scss']
})
export class NodeVideoComponent implements OnInit {
  @Input() node: CFQuestion;
  get video() {
    return (this.node as CFChoiceQuestion).video;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
