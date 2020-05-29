import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getAutoCompleteData } from 'src/app/module/auto-complete';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @Input() option: CFValidateOpt;
  @Input() theme: CFTheme;
  @Output() handleChange = new EventEmitter<string>();
  @Output() handleTrigger = new EventEmitter<string>();
  triggerText = '';
  private cachedPromoted: CFAutoCpltData[] = [];
  get promoted() {
    const data = this.getPromoted();
    if (this.cachedPromoted.join() !== data.join()) {
      this.cachedPromoted = data;
    }
    return this.cachedPromoted;
  }
  /**
   * 带选用的提示项
   */
  candidates: CFAutoCpltData[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }
  /**‰
   * 已选中的提示项
   */
  getPromoted(): CFAutoCpltData[] {
    const { option } = this;
    if (!option.value) {
      return [];
    }
    return String(option.value).split(',')
      .map(t => {
        return option.completeGroups.find(g => g.name === t);
      });
  }

  /**
   * 点击添加时的回调函数
   * @param value 值
   */
  handleAdd(value: string): void {
    const originValue = String(this.option.value);
    let newValue = '';
    if (!originValue) {
      newValue = value;
    } else {
      newValue = [...originValue.split(','), value].join();
    }
    this.handleChange.emit(newValue);
    // 清空提示输入框
    this.triggerText = '';
  }

  /**
   * 点击删除某个输入项的内容
   * @param value 值
   */
  handleRemove(value: string): void {
    const originValue = String(this.option.value);
    const newValue = originValue.split(',').filter(v => v !== value).join();
    this.handleChange.emit(newValue);
  }
  /**
   * 处理输入变化
   * @param value 值
   */
  preHandleTrigger(value: string): void {
    const { option } = this;
    const completeData = getAutoCompleteData(value, option.completeGroups,
      "full", option.simpleCplt);
    this.candidates = completeData.results;
    this.handleTrigger.emit(value);
  }
}
