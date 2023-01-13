# fast-cache-pf
短小精悍的前端缓存工具，防止内存“侧漏”

## 简介

特色（推广的一些亮点）

## 安装下载
- 下载地址：https://github.com/pfsjdsn/fast-cache-pf/releases
- `npm i fast-cache-pf`
- nmpm 地址： `https://www.npmjs.com/package/fast-cache-pf`
- CDN http://unpkg.com/fast-cache-pf/release/bundle.js
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
//git 创建tag并提交（tag作用：创建tag的作用：对某个特定的commit添加标记）
git tag -a 'v0.0.1' -m 'first commit'
git push origin v0.0.1

```



### 将项目提交到npm上

```js
npm adduser    // 1. 根据提示输入你的 username、password、email
 
npm publish .   //2. 发布你的项目到 npm.org
 
```



### 升级代码并提交

````js
//1、新建dev分支并切换到dev
git checkout -b dev
//2、修改版本  从0.0.1改成0.0.2 
"version": "0.0.2",
//3、修改文档 在doc/use/README.md中增加如下 
## 清空
```js
cache.clear()
```
// 4、自测，运行下代码，看下效果

````



 3、修改文档 在doc/use/README.md中增加如下 

## 清空

```js
cache.clear()
```

