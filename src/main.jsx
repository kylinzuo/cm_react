require('normalize.css')
require('less/global.less')
import React from 'react'
import { render } from 'react-dom'
import App from './page/index'

const MOUNT_NODE = document.getElementById('root')

// 加载组件到 DOM 元素 mountNode
render(<App />, MOUNT_NODE)
