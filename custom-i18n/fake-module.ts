/**
 * 该模块中导出的的成员是真实的,但是他们的值都是虚假的内容,仅仅为了连通编译检查
 * 真正构建的时候会将他们的值变成真实的值
 */

 /**
  * 多语言的资源地址,构建的时候会替换成真实地址
  */
export const zh_cn = '/assets/zh_cn.json';
export const en_us = '/assets/en_us.json';



/**
 * 多语言代号集合,先放一个空对象,构建的时候会把真实的集合放进来
 */
export const LANG: ILang = {} as ILang;

