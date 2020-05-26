module.exports = {
  /**
   * 要发配的cdn上的资源所在目录,这个一般不要改
   */
  cdnFolder: "assets",
  /**
   * 资源地址,每个项目的地址是不同的
   * 一般单独分离出的组件会被发布到我们的cdn上,这里设置后新的仓库组件会发布到的cdn的地址.
   */
  assetsPath: {
    local: "http://localhost:${port}",
    staging: "https://media.choiceform.io/os-client-xxxx",
    prod: "https://media.choiceform.com/os-client-xxxx"
  },
};