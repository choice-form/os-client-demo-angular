import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { loadIcon } from 'src/app/module/icon-lib';

@Component({
  selector: 'app-option-icon',
  templateUrl: './option-icon.component.html',
  styleUrls: ['./option-icon.component.scss']
})
export class OptionIconComponent implements OnInit {
  /**
   * 是否激活
   */
  @Input() activated: boolean;
  /**
   * 作为缓存依据的id
   */
  @Input() cacheId: string;
  /**
   * 选中时的图标地址
   */
  @Input() iconActiveUrl: string;
  /**
   * 常规图标地址
   */
  @Input() iconUrl: string;

  @ViewChild('iconActive') iconActive: HTMLDivElement;

  @ViewChild('iconNormal') iconNormal: HTMLDivElement;
  constructor() { }

  /**
   * 初始化图标
   */
  async initIcon(): Promise<void> {
    const { iconActiveUrl, iconUrl, cacheId: id } = this;
    const iconActive = await loadIcon(iconActiveUrl, id);
    const icon = await loadIcon(iconUrl, id);
    this.iconNormal.appendChild(icon);
    this.iconActive.appendChild(iconActive);
  }
  ngOnInit(): void {
  }

}
