import { I18n } from '@choiceform/os-client-core';
import customI18n from '../../../custom-i18n/fake-module';
const mf = new I18n.MessageFormat();
const { zh_cn, en_us } = customI18n;

/**
 * 多语言资源配置
 * 花括号里面的这个注释使用是用于构建的识别码，不能更改
 */
const langSrcMap: { [key: string]: string } = {
  zh_cn,
  en_us,
};

console.log(langSrcMap);

const langDict: { [key: string]: { [key: string]: any } } = {};

/**
 * 当前使用的语言
 */
let currentLang = 'zh_cn';


/**
 * 加载某个语言的翻译规则
 * @param lang 代号
 */
function loadLang(lang: string): any {
  lang = lang.toLowerCase();
  let src = langSrcMap[lang];
  // 还没有该UI语言的话退回英语
  if (!src) {
    lang = 'en_us';
    src = langSrcMap[lang];
  }
  if (!langDict[lang]) {
    const req = new XMLHttpRequest();
    req.open('GET', src, false);
    req.send();
    langDict[lang] = JSON.parse(req.responseText);
  }
  return langDict[lang];
}


/**
 * 设置当前语言
 * @param lang 语言代码
 */
export function setLocale(lang: string): void {
  currentLang = lang.toLowerCase();
}

/**
 * 翻译
 * @param key 键名
 * @param options 参数
 */
export function T(key: string, options?: any): string {
  let dict = loadLang(currentLang);
  try {
    const keys = key.split('.');
    let part = keys.shift();
    while (part) {
      dict = dict[part];
      part = keys.shift();
    }
    const msg = mf.compile(dict);
    return msg(options);
  } catch (e) {
    // he
  }
  return `missing translation for ${key} ${currentLang}`;
}


