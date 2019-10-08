import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteMainComponent } from './route-main/route-main.component';
import { RouteRewardComponent } from './route-reward/route-reward.component';
import { NodesModule } from './com/nodes/nodes.module';
import { CoverComponent } from './com/cover/cover.component';
@NgModule({
  declarations: [
    AppComponent,
    RouteMainComponent,
    RouteRewardComponent,
    CoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NodesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
