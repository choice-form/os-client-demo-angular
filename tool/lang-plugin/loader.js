
const loaderUtils = require("loader-utils");
const fs = require('fs');
const { getHash, parseLangObj } = require('./hash');
const dir = 'lang';
module.exports = function () {
  const files = fs.readdirSync(dir);
  let parsed = '';
  // 配置参数
  const { local, prefix } = loaderUtils.getOptions(this);
  // 每个语言文件导出一个资源连接地址
  files.forEach(file => {
    const filePath = dir + '/' + file;
    const code = file.replace('.ts', '');
    const source = fs.readFileSync(filePath).toString();
    const hash = local
      ? '' : '-' + getHash(code, source);
    parsed += `export const ${code} = '${prefix}/${code}${hash}.json';\n`;
  });
  // 以中文的字符集为基准生成整整的字符集
  let langCodes = fs.readFileSync('lang/zh_cn.ts').toString();
  const codeObj = parseLangObj(langCodes);
  replaceLangCode(codeObj);
  parsed += `export const LANG = ${JSON.stringify(codeObj, null, ' ')};\n`;
  return parsed;
};


function replaceLangCode(obj, prefix) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const accumulation = prefix ? prefix + '.' + key : key;
    const value = obj[key];
    if (typeof value === 'string') {
      obj[key] = accumulation;
    } else {
      replaceLangCode(value, accumulation);
    }
  }
}