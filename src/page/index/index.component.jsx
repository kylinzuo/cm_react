import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import indexStyle from './index.component.less'

const navList = [
  {
    icon: 'iconfont icon-shouye',
    path: '/',
    text: '首页'
  },
  {
    icon: 'iconfont icon-zhuanti',
    path: '/special',
    text: '专题'
  },
  {
    icon: 'iconfont icon-wode',
    path: '/me',
    text: '我的'
  }
]

class IndexComponent extends PureComponent {
  render () {
    console.log('%c this.props.route.routes', 'color: #f00', this.props.route.routes)
    return (
      <div className={indexStyle.container} style={{ height: '100%' }}>
        <div>
          { renderRoutes(this.props.route.routes) }
        </div>
        <nav className={indexStyle.navList} >
          <ul>
            {
              navList.map((d, i) => {
                return <li key={'key-' + i}><NavLink exact to={d.path} activeClassName={indexStyle.active}>
                  <i className={d.icon} />
                  {d.text}
                </NavLink></li>
              })
            }
          </ul>
        </nav>
      </div>
    )
  }
}

IndexComponent.propTypes = {
}

function select (state) {
  return {}
}

export default connect(select)(IndexComponent)
