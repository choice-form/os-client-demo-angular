import { Component, OnInit, Input } from '@angular/core';
import ComBase from 'src/app/module/com-base';

@Component({
  selector: 'app-reward-page',
  templateUrl: './reward-page.component.html',
  styleUrls: ['./reward-page.component.scss']
})
export class RewardPageComponent extends ComBase implements OnInit {
  @Input() model: CFRewardState;

  ngOnInit(): void {
  }

}
