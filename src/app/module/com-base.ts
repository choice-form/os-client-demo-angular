import { T } from "./i18n";

/**
 * 组件基类,提供一些常用的工具和方法
 */
class ComBase {
  /**
   * 多语言数据集合
   */
  LANG: ILang;
  /**
   * 快速翻译
   * @param text 多语言代号
   * @param options 变量对象
   */
  T(text: string, options: any) {
    return T(text, options);
  }
}
export default I18nComBase;
