import {
  Component, OnInit, ComponentFactoryResolver, Input,
  Directive, ViewContainerRef, ViewChild
} from '@angular/core';
import { ChoiceComponent } from './choice/choice.component';
import { TextUtilService } from 'src/app/service/text-util.service';


export const nodeComponentList = [
  ChoiceComponent
];

const componentMaps = {};

nodeComponentList.forEach(com => {
  componentMaps[com.name] = com;
});

interface NodeComponentBase {
  node: CFQuestion;
  eventHandler: CFUIEventHander;
}


@Directive({
  selector: '[appDynamicNodes]',
})
export class DynamicNodesDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.less']
})


export class NodesComponent implements OnInit {

  @Input() node: CFQuestion;

  @Input() eventHandler: CFUIEventHander;

  @ViewChild(DynamicNodesDirective, { static: true }) dynamicBox: DynamicNodesDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private textUtil: TextUtilService) { }

  ngOnInit() {
    this.dynamicPrepare();
  }

  dynamicPrepare() {
    const componentName = this.textUtil.pascalize(this.node.quesType + '-component');
    const component = componentMaps[componentName];
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(component);

    const dynamicBoxRef = this.dynamicBox.viewContainerRef;
    dynamicBoxRef.clear();
    const componentRef = dynamicBoxRef.createComponent(componentFactory);
    const componentInst = (componentRef.instance as NodeComponentBase);
    componentInst.node = this.node;
    componentInst.eventHandler = this.eventHandler;
  }
}
