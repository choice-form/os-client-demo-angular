
const loaderUtils = require("loader-utils");
const fs = require('fs');
const { getHash } = require('./hash');
const dir = 'src/lang';
module.exports = function () {
  const files = fs.readdirSync(dir);
  let parsed = 'export default {\n';
  // 多语言文件,导出文件路径
  const { local, prefix } = loaderUtils.getOptions(this);
  files.forEach(file => {
    const filePath = dir + '/' + file;
    const code = file.replace('.ts', '');
    const source = fs.readFileSync(filePath).toString();
    const hash = local
      ? '' : '-' + getHash(code, source);
    parsed += `  '${code}': '${prefix}/${code}${hash}.json',\n`;
  });
  parsed += '};\n';
  return parsed;
};
