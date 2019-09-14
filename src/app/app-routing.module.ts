import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteMainComponent } from './route-main/route-main.component';
import { RouteRewardComponent } from './route-reward/route-reward.component';


const routes: Routes = [
  { path: '', component: RouteMainComponent },
  { path: 'reward', component: RouteRewardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
