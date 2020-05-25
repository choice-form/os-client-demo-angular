import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteMainComponent } from './routes/route-main/route-main.component';
import { RouteSurveyComponent } from './routes/route-survey/route-survey.component';
import { RouteThemesComponent } from './routes/route-themes/route-themes.component';


const routes: Routes = [
  { path: '', component: RouteMainComponent },
  { path: 'survey', component: RouteSurveyComponent },
  { path: 'reward', component: RouteSurveyComponent },
  { path: 'themes', component: RouteThemesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
