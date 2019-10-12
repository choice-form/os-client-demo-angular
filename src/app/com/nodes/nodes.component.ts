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
  eventHandler: CFUIEventHandler;
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

  @Input() state: CFState;

  @Input() node: CFQuestion;

  @ViewChild(DynamicNodesDirective, { static: true }) dynamicBox: DynamicNodesDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private textUtil: TextUtilService) { }

  ngOnInit() {
    this.dynamicPrepare();
  }

  /**
   * 因为有很多类型的题目,我们使用了动态组件
   * 根据节点的展示类型动态选择组件渲染
   */
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
    componentInst.eventHandler = this.state.handleEvents;
  }

  clickPrev() {
    // 点击上一题是要调用核心包提供的回调函数
    this.state.handleEvents.handlePrevClick();
  }
    // 点击下一题是要调用核心包提供的回调函数
  clickNext() {
    this.state.handleEvents.handleNextClick();
  }
}
