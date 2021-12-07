# my-react-app
## 搭建项目
`npx create-react-app my-react-app`
js文件修改为jsx

## 安装基本依赖
`yarn add antd @craco/craco craco-less @babel/plugin-proposal-decorators babel-plugin-import -D
`

修改 package.json 中的 scripts

`
{
  "scripts":{
    "start": "set PORT=5000 && craco start FAST_REFRESH=true",
    "build": "set GENERATE_SOURCEMAP=false && craco build",
    "analyzer": "env NODE_ENV=production BUILD_ANALYZER=true yarn start",
    "test": "craco test"
  }
} 
`
项目根目录创建 craco.config.js 文件


## 
