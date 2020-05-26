import { Component, OnInit } from '@angular/core';
import { Core } from '@choiceform/os-client-core';

@Component({
  selector: 'app-route-survey',
  templateUrl: './route-survey.component.html',
  styleUrls: ['./route-survey.component.scss']
})
export class RouteSurveyComponent {
  surveyState: CFSurveyState;
  constructor() {
    Core.fetchSurveyState().then(state => {
      this.surveyState = state;
    });
  }
  showAnswerResumer() {
    return this.surveyState.answerResumer && this.surveyState.answerResumer.show;
  }
}
