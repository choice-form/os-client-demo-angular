import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicNodesDirective, NodesComponent } from './nodes.component';
import { ChoiceComponent } from './choice/choice.component';



@NgModule({
  declarations: [DynamicNodesDirective, NodesComponent, ChoiceComponent],
  imports: [
    CommonModule
  ],
  exports: [NodesComponent],
  entryComponents: [ChoiceComponent],
})
export class NodesModule { }
