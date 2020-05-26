const config = require('../build.config');

/**
 * 获取cdn资源路径
 * @param {*} env 
 */
function getAssetsPath(env, port) {
  let result = config.assetsPath[env.NODE_ENV];
  if (env.NODE_ENV === 'local') {
    result = result.replace('${port}', port);
  }
  if (config.cdnFolder) {
    result += "/" + config.cdnFolder;
  }
  return result;
}

/**
 * 获取cdn资源文件夹
 */
function getCdnFolder() {
  if (config.cdnFolder) {
    return config.cdnFolder + '/';
  }
  return '';
}

module.exports = {
  getAssetsPath,
  getCdnFolder,
};