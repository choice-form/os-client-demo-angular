import { Component, OnInit, Input } from '@angular/core';
import ComBase from 'src/app/module/com-base';
type ITabName = 'bookmark' | 'time';
@Component({
  selector: 'app-preview-tool',
  templateUrl: './preview-tool.component.html',
  styleUrls: ['./preview-tool.component.scss']
})
export class PreviewToolComponent extends ComBase implements OnInit {
  @Input() model: CFPreviewTool;
  /**
   * 预览书签名
   */
  bookmarkName = '';
  /**
   * 当前选中的tab名称
   */
  currentTab: ITabName = 'bookmark';
  /**
   * 时间预览者名称
   */
  timeTestName = '';

  ngOnInit(): void {
  }

}
