import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'

class HomeComponent extends PureComponent {
  render () {
    const { kylin } = this.props
    return (
      <div>
        { renderRoutes(this.props.route.routes) }
        { kylin }
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
