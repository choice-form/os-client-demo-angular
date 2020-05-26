const LangPlugin = require('./tool/lang-plugin/plugin');
const { getAssetsPath } = require('./tool/dev');
const path = require('path');
module.exports = (env) => {
  console.log(env.NODE_ENV);
  const local = true;
  return {
    plugins: [
      new LangPlugin({ directory: 'src/lang', local }),
    ],
    module: {
      rules: [
        {
          test: /src[\\/]custom-i18n.ts/,
          use: [{
            loader: LangPlugin.entryLoader,
            options: { local, prefix: getAssetsPath(env) }
          }]
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        "custom-i18n": path.join(__dirname, `src/custom-i18n.ts`),
      },
    },
  };
};