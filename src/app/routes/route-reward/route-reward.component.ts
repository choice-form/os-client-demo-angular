import { Component, OnInit } from '@angular/core';
import { Core } from '@choiceform/os-client-core';
@Component({
  selector: 'app-route-reward',
  templateUrl: './route-reward.component.html',
  styleUrls: ['./route-reward.component.scss']
})
export class RouteRewardComponent implements OnInit {
  rewardState: CFRewardState;
  constructor() {
    Core.fetchRewardState().then(state => this.rewardState = state);
  }

  ngOnInit(): void {
  }

}
