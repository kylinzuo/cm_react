require('less/global.less')
import React from 'react'
import { render } from 'react-dom'
import App from './page/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory()

import todoApp from './redux/reducers'

let store = createStore(todoApp)
console.log(store)
const MOUNT_NODE = document.getElementById('root')

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const routes = {
//   path: '/',
//   component: Home,
//   indexRoute: { component: Home }
// }

// 加载组件到 DOM 元素 mountNode
render(
  <Provider store={store}>
    <Router history={newHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
  ,
  MOUNT_NODE
)
