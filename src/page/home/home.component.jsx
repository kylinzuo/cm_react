import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { renderRoutes } from 'react-router-config'

import homeStyle from './home.component.less'
import HeaderComponent from '../components/header/header.component'
import TopicHeaderComponent from '../components/topic-header/topic-header.component'

class HomeComponent extends PureComponent {
  render () {
    return (
      <div>
        <HeaderComponent />
        <div className={homeStyle.carousel} />
        <TopicHeaderComponent />
      </div>
    )
  }
}

HomeComponent.propTypes = {
}

function select (state) {
  return {
    kylin: state.kylin
  }
}

export default connect(select)(HomeComponent)
