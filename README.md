# fast-cache-pf
短小精悍的前端缓存工具，防止内存“侧漏”

## 简介

特色（推广的一些亮点）

## 安装下载

## 快速使用

简单接入的文档

- 使用文档 (./doc/use/README.md)
- 二次开发文档 (./doc/dev/README.md)

## 交流 & 提问

github的issues地址

## 关于作者

- 个人主页
- 收款二维码




```js
// 项目初始化
npm init
// 创建目录
mkdir src release test doc example
// 安装webpack插件
cnpm i babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest webpack webpack-cli --save-dev 
// webpack 打包
npm run release
// 安装令行 http服务器
npm install http-serve -g
// package.json配置
"release": "webpack"，
"example": "http-server -p 8880"

```



### 安装gitbook（文档doc使用）

```js
// 全局安装
1、npm install -g gitbook-cli 
2、生成SUMMARY.MD文件
内容如下：
# Summary

* [项目介绍](README.md)
* [使用文档](doc/use/README.md)
    * [使用1](doc/use/use1.md)
    * [使用2](doc/use/use2.md)
* [二次开发](doc/dev/README.md)
    * [开发1](doc/dev/dev1/dev1.md)
    * [开发2](doc/dev/dev2/dev2.md)
// 初始化
gitbook init 
// 构建 
gitbook build 
```
