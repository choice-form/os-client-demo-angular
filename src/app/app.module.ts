import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteMainComponent } from './routes/route-main/route-main.component';
import { RouteSurveyComponent } from './routes/route-survey/route-survey.component';
import { RouteRewardComponent } from './routes/route-reward/route-reward.component';
import { RouteThemesComponent } from './routes/route-themes/route-themes.component';
import { AnswerResumeComponent } from './components/answer-resume/answer-resume.component';
import { LangListComponent } from './components/lang-list/lang-list.component';
import { QuesContainerComponent } from './components/ques-container/ques-container.component';
import { DynamicNodeComponent } from './components/dynamic-node/dynamic-node.component';
import { ChoiceNodeComponent } from './components/nodes/choice-node/choice-node.component';
import { ShortTextNodeComponent } from './components/nodes/short-text-node/short-text-node.component';
import { DynamicNodeAnchorDirective } from './directive/dynamic-node-anchor.directive';
import { NoViewComponent } from './components/no-view/no-view.component';
import { PreviewToolComponent } from './components/preview-tool/preview-tool.component';
import { TimerComponent } from './components/timer/timer.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StartPageComponent } from './components/nodes/start-page/start-page.component';
import { RewardPageComponent } from './components/nodes/reward-page/reward-page.component';
import { NodeVideoComponent } from './components/partials/node-video/node-video.component';
import { NodeImageComponent } from './components/partials/node-image/node-image.component';
import { NodeHeadComponent } from './components/partials/node-head/node-head.component';
import { NodeBodyComponent } from './components/partials/node-body/node-body.component';
import { OptionInputComponent } from './components/partials/option-input/option-input.component';
import { AutoCompleteComponent } from './components/partials/auto-complete/auto-complete.component';
import { ChoiceOptionComponent } from './components/partials/choice-option/choice-option.component';
import { OptionIconComponent } from './components/partials/option-icon/option-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteMainComponent,
    RouteSurveyComponent,
    RouteRewardComponent,
    RouteThemesComponent,
    AnswerResumeComponent,
    LangListComponent,
    QuesContainerComponent,
    DynamicNodeComponent,
    ChoiceNodeComponent,
    ShortTextNodeComponent,
    DynamicNodeAnchorDirective,
    NoViewComponent,
    PreviewToolComponent,
    TimerComponent,
    ProgressBarComponent,
    StartPageComponent,
    RewardPageComponent,
    NodeVideoComponent,
    NodeImageComponent,
    NodeHeadComponent,
    NodeBodyComponent,
    OptionInputComponent,
    AutoCompleteComponent,
    ChoiceOptionComponent,
    OptionIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
