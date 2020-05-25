import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-survey',
  templateUrl: './route-survey.component.html',
  styleUrls: ['./route-survey.component.scss']
})
export class RouteSurveyComponent implements OnInit {

  constructor() {
    console.log('survey');
  }

  ngOnInit(): void {
  }

}
