# web-html-less

## 搭建项目
`npx create-react-app my-react-app`
js文件修改为jsx

## 配置选择
第一种是eject，他的原理是将react-scripts拆除然后将配置暴露到应用顶层，用户就可以自行进行配置
坏处就是react-scripts被解散了，就不能随官方配置进行升级

第二种是使用react-app-rewired，用户通过config-overrides.js增加修改配置

第三种 craco,相对于第二种要简单

参考 https://juejin.cn/post/6844903848910258183


`yarn add antd @craco/craco craco-less @babel/plugin-proposal-decorators babel-plugin-import -D
`


