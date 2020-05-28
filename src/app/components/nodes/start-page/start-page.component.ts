import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  @Input() model: CFStartState;
  constructor() { }

  ngOnInit(): void {
  }

}
