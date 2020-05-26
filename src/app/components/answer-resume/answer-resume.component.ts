import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-resume',
  templateUrl: './answer-resume.component.html',
  styleUrls: ['./answer-resume.component.scss']
})
export class AnswerResumeComponent implements OnInit {
  @Input() answerResumer: CFAnswerResumer;
  constructor() { }

  ngOnInit(): void {
  }

}
