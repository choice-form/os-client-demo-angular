import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.less']
})
export class CoverComponent implements OnInit, OnChanges {
  @Input() intro: CFIntro;
  @Output() handleStart = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.intro);
  }
  start() {
    console.log('start');
    this.handleStart.emit();
  }
}
