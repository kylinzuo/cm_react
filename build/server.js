const express = require('express')
const routeFallback = require('connect-history-api-fallback')
const compression = require('compression')
const logger = require('morgan')
const config = require('../config').build

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import StaticRouter from 'react-router-dom/StaticRouter'
import { renderRoutes } from 'react-router-config'
import routes from '../src/routes'

import todoApp from '../src/redux/reducers'

process.env.NODE_ENV = 'production'
console.log('routes', routes)

const store = createStore(todoApp)

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <!-- viewport -->
      <meta name ="viewport" content ="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
      <!-- seo -->
      <meta name="keywords" content="好人好股 值得 中和应泰">
      <meta name="description" content="好人好股 值得 中和应泰">
      <!-- 禁止百度转码 -->
      <meta http-equiv="Cache-Control" content="no-siteapp">
      <!-- UC 强制竖屏 -->
      <meta name="screen-orientation" content="portrait">
      <!-- UC 强制全屏 -->
      <meta name="full-screen" content="yes">
      <!-- UC 应用模式 -->
      <meta name="browsermode" content="application">
      <!-- UC 排版模式 -->
      <meta name="layoutmode" content="standard">
      <!-- UC 禁止缩放字体 -->
      <meta name="wap-font-scale" content="no">
      <!-- QQ 强制竖屏 -->
      <meta name="x5-orientation" content="portrait">
      <!-- QQ 强制全屏 -->
      <meta name="x5-fullscreen" content="true">
      <!-- QQ 应用模式 -->
      <meta name="x5-page-mode" content="app">
      <!-- 360 浏览器渲染模式 - 极速模式 -->
      <meta name="renderer" content="webkit">
      <!-- IOS 强制全屏 -->
      <meta name="apple-mobile-web-app-capable" content="yes">
      <!-- IOS 强制状态栏颜色 -->
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <!-- IOS 忽略数字识别为电话号 -->
      <meta name="format-detection" content="telephone=no, email=no">
      <!-- IOS 主屏标题 -->
      <meta name="apple-mobile-web-app-title" content="好人好股">
      <!-- Android 添加到主屏 -->
      <meta name="mobile-web-app-capable" content="yes">
      <!-- google 禁止翻译插件 -->
      <meta name="google" content="notranslate">
      <title>值得</title>
    </head>
    <body>
      <div id="root" style="height: 100%">
        ${html}
      </div>
    </body>
    </html>
  `;
}

const app = express()

// 日志
app.use(logger('dev'))

// 开启压缩
app.use(compression())

// 页面路由fallback
app.use(routeFallback())

// 静态资源
const oneYear = 60 * 1000 * 60 * 24 * 365
app.use(config.assetsPublicStatic, express.static(config.assetsRootStatic, {
    maxAge: oneYear
}))

let html = `<div>服务端渲染</div>`
let initialState = 'hello world'

// 拦截根路由下 html 文件请求，取消缓存
app.use('/', (req, res) => {
    // res.end(renderFullPage(html, initialState))
    let context = {};
    const content = renderToString(
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    )
    res.render('index', {title: 'Express', data: false, content });
})

// 启动服务
app.listen(config.port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`服务启动，地址：http://localhost:${config.port}`)
})
