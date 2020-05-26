import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ChoiceNodeComponent } from '../nodes/choice-node/choice-node.component';
import { ShortTextNodeComponent } from '../nodes/short-text-node/short-text-node.component';
import { DynamicNodeAnchorDirective } from 'src/app/directive/dynamic-node-anchor.directive';

interface INodeComponent {
  node: CFQuestion;
  handler: CFUIEventHandler;
  theme: CFTheme;
}

const nodeComponentMap: { [key: string]: any } = {
  choice: ChoiceNodeComponent,
  'short-text': ShortTextNodeComponent,
};

@Component({
  selector: 'app-dynamic-node',
  templateUrl: './dynamic-node.component.html',
  styleUrls: ['./dynamic-node.component.scss']
})
export class DynamicNodeComponent implements OnInit, INodeComponent {
  @Input() node: CFQuestion;
  @Input() handler: CFUIEventHandler;
  @Input() theme: CFTheme;
  @ViewChild(DynamicNodeAnchorDirective, { static: true }) dynamicNodeAnchor: DynamicNodeAnchorDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.renderDynamicNode();
  }

  renderDynamicNode() {
    const com = nodeComponentMap[this.node.quesType];
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(com);
    const viewContainerRef = this.dynamicNodeAnchor.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as INodeComponent).node = this.node;
    (componentRef.instance as INodeComponent).handler = this.handler;
    (componentRef.instance as INodeComponent).theme = this.theme;
  }
}
