import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import indexStyle from './index.component.less'

const navList = [
  {
    icon: '',
    path: '/',
    text: '首页'
  },
  {
    icon: '',
    path: '/',
    text: '专题'
  },
  {
    icon: '',
    path: '/',
    text: '我的'
  }
]

class IndexComponent extends PureComponent {
  render () {
    return (
      <div className={indexStyle.container} style={{ height: '100%' }}>
        <div>
          { renderRoutes(this.props.route.routes) }
        </div>
        <nav className={indexStyle.navList} >
          <ul>
            {
              navList.map((d, i) => {
                return <li key={'key-' + i}><Link to={d.path} >{d.text}</Link></li>
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
