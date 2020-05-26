const LangPlugin = require('./tool/lang-plugin/plugin');
const { getAssetsPath } = require('./tool/dev');
const path = require('path');
module.exports = (originConfig) => {
  const env = {
    NODE_ENV: originConfig.watch === true
      ? 'local'
      : process.argv.includes('staging')
        ? 'staging' : 'prod'
  };
  let port = '';
  for (let args of process.argv) {
    const match = args.match(/--port=(\d+)/);
    if (match) {
      port = match[1];
    }
  }
  const local = env.NODE_ENV === 'local';
  originConfig.plugins.push(new LangPlugin({ directory: 'lang', local }));
  originConfig.module.rules.push({
    test: /src[\\/]custom-i18n.ts/,
    use: [{
      loader: LangPlugin.loader,
      options: { local, prefix: getAssetsPath(env, port) }
    }]
  });
  originConfig.resolve.alias['custom-i18n'] = path.join(__dirname, `src/custom-i18n.ts`);
  return originConfig;
};