import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

class AppRoot extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this.props.route)
    return <div>
      AppRoot
      {renderRoutes(this.props.route.routes)}
    </div>
  }
}
AppRoot.PropTypes = {
  route: PropTypes.any.isRequired
}

const Home = () => (
  <div> Home Page</div>
)
const List = () => (
  <div> List Page </div>
)

const routes = [
  {
    component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/list',
        component: List
      }
    ]
  }
]

export default routes
