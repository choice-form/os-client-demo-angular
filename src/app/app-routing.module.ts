import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteMainComponent } from './route-main/route-main.component';
import { RouteRewardComponent } from './route-reward/route-reward.component';

/**
 * 分两个路由,一个是首页和答题的路由
 * 一个是奖励页面的路由
 */
const routes: Routes = [
  { path: '', component: RouteMainComponent },
  { path: 'reward', component: RouteRewardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
