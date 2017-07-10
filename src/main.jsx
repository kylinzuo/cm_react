// http://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/
import React from 'react'
import {render} from 'react-dom'

import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import routes from './routes'
import todoApp from './redux/reducers'

const store = createStore(
  todoApp, window.__INITIAL_STATE__, applyMiddleware(thunk)
)

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

render(<AppRouter />, document.querySelector('#root'))
