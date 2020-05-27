import { Component, OnInit, Input } from '@angular/core';
import ComBase from 'src/app/module/com-base';

@Component({
  selector: 'app-no-view',
  templateUrl: './no-view.component.html',
  styleUrls: ['./no-view.component.scss']
})
export class NoViewComponent extends ComBase implements OnInit {
  @Input() node: CFQuestion;

  ngOnInit(): void {
  }

}
