import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.less']
})
export class CoverComponent implements OnInit {
  @Input() intro: CFIntro;
  @Output() handleStart = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  start() {
    this.handleStart.emit();
  }
}
