import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteMainComponent } from './routes/route-main/route-main.component';
import { RouteSurveyComponent } from './routes/route-survey/route-survey.component';
import { RouteRewardComponent } from './routes/route-reward/route-reward.component';
import { RouteThemesComponent } from './routes/route-themes/route-themes.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteMainComponent,
    RouteSurveyComponent,
    RouteRewardComponent,
    RouteThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
